import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src/content/posts");

export interface Post {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    content: string;
    category?: string;
    tags?: string[];
}

export function getAllPosts(): Post[] {
    // Check if directory exists
    if (!fs.existsSync(CONTENT_DIR)) {
        console.warn(`Content directory not found: ${CONTENT_DIR}`);
        return [];
    }

    const files = fs.readdirSync(CONTENT_DIR);
    const posts = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
            const filePath = path.join(CONTENT_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);

            // Remove extension
            const rawSlug = file.replace(/\.md$/, "");

            // Try to extract date and title from filename
            // Pattern: YYYY-MM-DD Title
            const filenameMatch = rawSlug.match(/^(\d{4}-\d{2}-\d{2})[\s_]*(.+)$/);

            let date = data.date || "2024-01-01";
            let title = data.title || rawSlug;

            if (filenameMatch) {
                if (!data.date) date = filenameMatch[1];
                if (!data.title) title = filenameMatch[2].trim();
            }

            return {
                slug: rawSlug, // Keeping raw slug to match filename for now, Next.js handles encoding
                title,
                date,
                excerpt: data.excerpt || content.slice(0, 100).replace(/[#*`]/g, "") + "...",
                content,
                category: data.category || "Monologue",
                tags: data.tags || [],
            };
        })
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return posts;
}
