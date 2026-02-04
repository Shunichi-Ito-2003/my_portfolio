const fs = require('fs');
const path = require('path');
const https = require('https');
const TurndownService = require('turndown');
const cheerio = require('cheerio');

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
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };
        https.get(url, options, (res) => {
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
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        };
        https.get(url, options, (res) => {
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

    // Fetch Page HTML
    const html = await fetchHtml(noteUrl);
    const $ = cheerio.load(html);

    // Try to find the content div
    // Note.com typically uses classes like .note-common-styles__text or .p-article__content
    let bodyHtml = $('.note-common-styles__text').html();

    if (!bodyHtml) {
        // Fallback or try identifying standard structure
        bodyHtml = $('[data-name="body"]').html();
    }

    if (!bodyHtml) {
        console.warn(`No body content found for ${noteUrl}, saving only frontmatter/summary.`);
        bodyHtml = content.summary || ""; // Fallback to summary from API list if possible
    }

    const contentMarkdown = turndownService.turndown(bodyHtml);

    // Ensure tags is valid
    const tags = content.hashtags ? content.hashtags.map(t => t.hashtag.name) : [];

    const frontmatter = `---
title: "${content.name.replace(/"/g, '\\"')}"
date: "${dateStr}"
layout: post
slug: "${content.key}"
originalUrl: "${noteUrl}"
tags: ${JSON.stringify(tags)}
---

${contentMarkdown}
`;

    fs.writeFileSync(filePath, frontmatter);
    console.log(`Saved: ${filename}`);
}

fetchAllNotes().then(() => {
    // Optional: Fail if no notes were processed?
    // For now, just ensure clean exit
}).catch(err => {
    console.error("Fatal Error in Note Fetch:", err);
    process.exit(1);
});
