import { getAllPosts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Required for static export to know which paths to build
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
    const posts = getAllPosts();
    // In a real DB scenario we'd fetch just one, but with FS we have them all loaded anyway or easy to filter
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        return (
            <div className="min-h-screen pt-32 pb-16 px-4 md:px-8 text-center text-white">
                <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                <Link href="/digital-garden" className="text-gold hover:underline">
                    Return to Digital Garden
                </Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-background">
            <div className="max-w-3xl mx-auto animate-in fade-in duration-700">

                {/* Back Button */}
                <Link
                    href="/digital-garden"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-cinematic tracking-widest">BACK TO LIST</span>
                </Link>

                {/* Header */}
                <header className="mb-16 space-y-6">
                    <div className="flex items-center gap-4 text-sm font-cinematic tracking-widest text-gold/80">
                        <time>{post.date}</time>
                        <span className="w-px h-4 bg-white/20" />
                        <span>{post.category}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-japanese font-bold text-white leading-relaxed">
                        {post.title}
                    </h1>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none font-japanese leading-loose text-white/80
                    prose-headings:font-bold prose-headings:text-white prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-gold prose-h2:pl-4
                    prose-p:mb-8 prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-white/20 prose-blockquote:text-white/60 prose-blockquote:italic
                    prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                    prose-img:rounded-md prose-img:border prose-img:border-white/10
                    prose-hr:border-white/10 prose-hr:my-12
                ">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Footer / Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <div className="flex flex-wrap gap-3">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}
