import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

const CONTENT_DIR = path.join(process.cwd(), "../07_note原稿");

interface PostPageProps {
    params: {
        slug: string;
    };
}

// Generate static params for SSG
export async function generateStaticParams() {
    if (!fs.existsSync(CONTENT_DIR)) return [];

    const files = fs.readdirSync(CONTENT_DIR);
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => ({
            slug: file.replace(/\.md$/, ""),
        }));
}

async function getPost(slug: string) {
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
        title: data.title || slug,
        date: data.date || "2024-01-01",
        content,
        tags: data.tags || [],
    };
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-24 pb-16 px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
                <header className="mb-12 text-center space-y-4">
                    <div className="text-sm text-accent font-medium tracking-wide uppercase">
                        {new Date(post.date).toLocaleDateString("ja-JP")}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                        {post.title}
                    </h1>
                    {post.tags.length > 0 && (
                        <div className="flex justify-center gap-2 pt-2">
                            {post.tags.map((tag: string) => (
                                <span key={tag} className="text-xs bg-secondary/20 px-3 py-1 rounded-full text-foreground/70">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div className="prose prose-lg dark:prose-invert prose-stone mx-auto 
          prose-headings:font-serif prose-headings:font-bold prose-headings:text-foreground
          prose-p:text-foreground/80 prose-p:leading-relaxed
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow-lg
          max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
