import { getAllPosts } from './src/lib/posts.ts';

console.log("Starting post fetch...");
const posts = getAllPosts();
console.log(`Fetched ${posts.length} posts.`);
posts.slice(0, 3).forEach(p => console.log(`- ${p.title} (${p.date})`));
