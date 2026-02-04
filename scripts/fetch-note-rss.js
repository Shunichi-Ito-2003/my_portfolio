const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const TurndownService = require('turndown');

const RSS_URL = 'https://note.com/icchii_110/rss';
const POSTS_DIR = path.join(__dirname, '../src/content/posts');

async function fetchNotePosts() {
    console.log(`Fetching RSS from ${RSS_URL}...`);

    // Ensure directory exists
    if (!fs.existsSync(POSTS_DIR)) {
        fs.mkdirSync(POSTS_DIR, { recursive: true });
    } else {
        // Clean up existing posts to ensure freshness? 
        // Or keep them? User said "100 posts", RSS might only have 25.
        // If we want to keep older posts, we shouldn't delete. 
        // But for now, let's just overwrite/add.
        console.log("Updating posts in " + POSTS_DIR);
    }

    const parser = new Parser({
        customFields: {
            item: [
                ['media:thumbnail', 'thumbnail'],
                ['content:encoded', 'contentEncoded'],
            ],
        },
    });

    const turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced'
    });

    try {
        const feed = await parser.parseURL(RSS_URL);
        console.log(`Found ${feed.items.length} items.`);

        for (const item of feed.items) {
            const title = item.title;
            const link = item.link;
            const pubDate = new Date(item.pubDate);
            const dateStr = pubDate.toISOString().split('T')[0]; // YYYY-MM-DD

            // Note.com slug is usually the last part of the URL
            // e.g. https://note.com/icchii_110/n/nacd12345...
            const urlParts = link.split('/');
            const slug = urlParts[urlParts.length - 1] || `note-${pubDate.getTime()}`;

            // Create filename: YYYY-MM-DD Title.md (sanitized) to match previous format if possible
            // But slug-based filename is safer: YYYY-MM-DD-slug.md
            // The previous code expected: YYYY-MM-DD Title.md or just parsed frontmatter.
            // Let's use a safe filename and ensure frontmatter has the date.
            const safeTitle = title.replace(/[\/\\?%*:|"<>]/g, '-');
            const filename = `${dateStr} ${safeTitle}.md`;
            const filePath = path.join(POSTS_DIR, filename);

            const contentHtml = item.contentEncoded || item.content || '';
            const contentMarkdown = turndownService.turndown(contentHtml);

            const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${dateStr}"
layout: post
slug: "${slug}"
originalUrl: "${link}"
---

${contentMarkdown}
`;

            fs.writeFileSync(filePath, frontmatter);
            console.log(`Saved: ${filename}`);
        }

        console.log('RSS fetch complete.');

    } catch (error) {
        console.error('Error fetching RSS:', error);
        process.exit(1);
    }
}

fetchNotePosts();
