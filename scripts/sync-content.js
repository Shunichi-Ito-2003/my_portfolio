const fs = require('fs');
const path = require('path');

// Source: The "07_note原稿" directory outside the website folder
// Adjust this path to match your local environment for testing
// In CI/CD, we will need to handle this differently (e.g., by committing the files into the repo or fetching them)
// BUT since the user wants to keep the workflow simple:
// The most robust way for a personal static site is to COPY the content into the repo
// automatically before every commit/build.

const SOURCE_DIR = path.resolve(__dirname, '../../07_note原稿');
const DEST_DIR = path.resolve(__dirname, '../src/content/posts');

console.log(`Syncing content from ${SOURCE_DIR} to ${DEST_DIR}`);

if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    // If running in CI and source is missing, we might want to fail
    // But for now let's just warn if testing locally
    process.exit(1);
}

// Ensure destination exists
if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
}

// Copy files
const files = fs.readdirSync(SOURCE_DIR);
let count = 0;

files.forEach(file => {
    if (file.endsWith('.md')) {
        const srcPath = path.join(SOURCE_DIR, file);
        const destPath = path.join(DEST_DIR, file);
        fs.copyFileSync(srcPath, destPath);
        count++;
    }
});

console.log(`Successfully synced ${count} markdown files.`);
