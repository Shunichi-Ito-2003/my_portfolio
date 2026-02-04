import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Points to the internal content directory
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
            // Pattern: YYYY-MM-DD Title or YYYY-MM-DD_Title
            const filenameMatch = rawSlug.match(/^(\d{4}-\d{2}-\d{2})[\s_]*(.+)$/);

            let date = data.date || "2024-01-01";
            let title = data.title || rawSlug;

            if (filenameMatch) {
                if (!data.date) date = filenameMatch[1];
                if (!data.title) title = filenameMatch[2].trim();
            }

            // Create excerpt from content if not provided
            // Strip markdown chars and take first 100 chars
            const excerpt = data.excerpt || content.replace(/^#+\s.*$/gm, '').replace(/[#*`]/g, "").trim().slice(0, 120) + "...";

            return {
                slug: rawSlug,
                title,
                date,
                excerpt,
                content,
                category: data.category || "Monologue",
                tags: data.tags || [],
            };
        })
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return posts;
}
