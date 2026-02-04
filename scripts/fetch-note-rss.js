const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');
const cheerio = require('cheerio');

const USER_ID = 'icchi_ito';
const API_BASE = `https://note.com/api/v2/creators/${USER_ID}/contents?kind=note`;
const POSTS_DIR = path.join(__dirname, '../src/content/posts');

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

async function fetchAllNotes() {
    console.log(`Starting full Note.com import for ${USER_ID} (using native fetch)...`);
    console.log(`Target Directory: ${POSTS_DIR}`);

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
            const res = await fetch(listUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Failed to fetch list: ${res.status} ${res.statusText} - ${text.substring(0, 100)}`);
            }

            const data = await res.json();
            const contents = data.data.contents;

            if (!contents || contents.length === 0) {
                if (page === 1) {
                    console.error("ERROR: No articles found on page 1. API might be blocked or returning empty.");
                } else {
                    console.log("No more contents found.");
                }
                hasMore = false;
                break;
            }

            for (const content of contents) {
                if (content.status !== 'published') continue;

                try {
                    await processNote(content);
                    totalCount++;
                    // Be polite
                    await new Promise(resolve => setTimeout(resolve, 500));
                } catch (e) {
                    console.error(`Failed to process note ${content.key}: ${e.message}`);
                    continue; // Continue to next note
                }
            }

            if (data.data.isLastPage) {
                hasMore = false;
            } else {
                page++;
            }

            if (page > 20) hasMore = false;

        } catch (error) {
            console.error(`Error fetching page ${page}:`, error);
            // If page 1 fails, it's a fatal error because it means NO CONTENT at all
            if (page === 1) {
                throw error;
            }
            hasMore = false;
        }
    }

    console.log(`Import complete. Processed ${totalCount} notes.`);

    // Verify files
    const files = fs.readdirSync(POSTS_DIR);
    console.log(`Verified: ${files.length} files exist in ${POSTS_DIR}`);
    if (files.length === 0) {
        console.warn("WARNING: No files generated and directory empty. Build might be empty.");
    }
}

async function processNote(content) {
    const noteUrl = `https://note.com/${USER_ID}/n/${content.key}`;
    const pubDate = new Date(content.publishAt);
    const dateStr = pubDate.toISOString().split('T')[0];
    const safeTitle = content.name.replace(/[\/\\?%*:|"<>]/g, '-');
    const filename = `${dateStr} ${safeTitle}.md`;
    const filePath = path.join(POSTS_DIR, filename);

    const res = await fetch(noteUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    });

    if (!res.ok) {
        console.warn(`Failed to fetch article body ${noteUrl}: ${res.status}`);
        return;
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    let bodyHtml = $('.note-common-styles__text').html();

    if (!bodyHtml) {
        bodyHtml = $('[data-name="body"]').html();
    }

    if (!bodyHtml) {
        console.warn(`No body content found for ${noteUrl}, saving only frontmatter/summary.`);
        bodyHtml = content.summary || "";
    }

    const contentMarkdown = turndownService.turndown(bodyHtml);
    const tags = content.hashtags ? content.hashtags.map(t => t.hashtag.name) : [];

    // Ensure we handle quotes in JSON stringify properly
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

fetchAllNotes().catch(err => {
    console.warn("WARNING: Note.com sync failed (likely API block). proceed with existing files.", err);
    // process.exit(0) to allow build to continue
    process.exit(0);
});
