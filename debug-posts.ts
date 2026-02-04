import { getAllPosts } from './src/lib/posts.ts';

console.log("Diagnostics: Starting post fetch...");
try {
    const posts = getAllPosts();
    console.log(`Diagnostics: Success. Fetched ${posts.length} posts.`);
    if (posts.length > 0) {
        console.log(`First post: ${posts[0].title}`);
    }
} catch (error) {
    console.error("Diagnostics: Error fetching posts:", error);
}
console.log("Diagnostics: Finished.");
