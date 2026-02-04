const fs = require('fs');
const path = require('path');
const https = require('https');
const TurndownService = require('turndown');

const USER_ID = 'icchi_ito';
const API_BASE = `https://note.com/api/v2/creators/${USER_ID}/contents?kind=note`;
const POSTS_DIR = path.join(__dirname, '../src/content/posts');

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

// Helper to fetch JSON from URL
function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

// Helper to fetch HTML text
function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function fetchAllNotes() {
    console.log(`Starting full Note.com import for ${USER_ID}...`);

    if (!fs.existsSync(POSTS_DIR)) {
        fs.mkdirSync(POSTS_DIR, { recursive: true });
    }

    let page = 1;
    let hasMore = true;
    let totalCount = 0;

    while (hasMore) {
        console.log(`Fetching list page ${page}...`);
        const listUrl = `${API_BASE}&page=${page}`;

        try {
            const data = await fetchJson(listUrl);
            const contents = data.data.contents;

            if (!contents || contents.length === 0) {
                console.log("No more contents found.");
                hasMore = false;
                break;
            }

            for (const content of contents) {
                // Skip if not published
                if (content.status !== 'published') continue;

                try {
                    await processNote(content);
                    totalCount++;
                    // Be polite to the server
                    await new Promise(resolve => setTimeout(resolve, 500));
                } catch (e) {
                    console.error(`Failed to process note ${content.key}: ${e.message}`);
                }
            }

            // Check if we reached the last page (simple heuristic or use data.data.isLastPage if available)
            if (data.data.isLastPage) {
                hasMore = false;
            } else {
                page++;
            }

            // Safety break to prevent infinite loops during dev
            if (page > 20) hasMore = false;

        } catch (error) {
            console.error(`Error fetching page ${page}:`, error.message);
            hasMore = false;
        }
    }

    console.log(`Import complete. Processed ${totalCount} notes.`);
}

async function processNote(content) {
    const noteUrl = `https://note.com/${USER_ID}/n/${content.key}`;
    const pubDate = new Date(content.publishAt);
    const dateStr = pubDate.toISOString().split('T')[0];
    const safeTitle = content.name.replace(/[\/\\?%*:|"<>]/g, '-');
    const filename = `${dateStr} ${safeTitle}.md`;
    const filePath = path.join(POSTS_DIR, filename);

    // Skip if file exists? No, user wants to sync.
    // console.log(`Processing: ${content.name}`);

    // Fetch Page HTML to get full body
    const html = await fetchHtml(noteUrl);

    // Extract __NEXT_DATA__
    const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([^<]+)<\/script>/);
    if (!match) {
        console.warn(`Could not find NEXT_DATA for ${noteUrl}, skipping content.`);
        return;
    }

    const nextData = JSON.parse(match[1]);
    const noteData = nextData.props.pageProps.note;

    // Body content (HTML)
    const bodyHtml = noteData.body_html || noteData.body; // Check schema

    if (!bodyHtml) {
        console.warn(`No body content found for ${noteUrl}`);
        return;
    }

    const contentMarkdown = turndownService.turndown(bodyHtml);

    const frontmatter = `---
title: "${content.name.replace(/"/g, '\\"')}"
date: "${dateStr}"
layout: post
slug: "${content.key}"
originalUrl: "${noteUrl}"
tags: ${JSON.stringify(content.hashtags ? content.hashtags.map(t => t.hashtag.name) : [])}
---

${contentMarkdown}
`;

    fs.writeFileSync(filePath, frontmatter);
    console.log(`Saved: ${filename}`);
}

fetchAllNotes().catch(console.error);
