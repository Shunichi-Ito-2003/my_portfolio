import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
    title: string;
    excerpt: string;
    date: string;
    href: string;
    category?: string;
    className?: string; // Add className prop
}

export function Card({ title, excerpt, date, href, category }: CardProps) {
    return (
        <Link
            href={href}
            className="group relative block aspect-[2/3] overflow-hidden rounded-lg bg-secondary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20"
        >
            {/* Poster Background Placeholder - In real use, this would be an image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 transform transition-transform duration-500">

                {/* Category Badge (Like 'Coming Soon' or 'Now Showing') */}
                <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {category && (
                        <span className="text-[10px] font-cinematic tracking-widest uppercase border border-accent/50 text-accent px-2 py-1 bg-black/80">
                            {category}
                        </span>
                    )}
                </div>

                <div className="space-y-3 transform transition-all duration-300 group-hover:-translate-y-2">
                    <span className="text-xs font-cinematic text-accent/80 tracking-widest uppercase">
                        {date}
                    </span>
                    <h3 className="text-2xl font-japanese font-bold text-white leading-tight line-clamp-2 group-hover:text-accent transition-colors">
                        {title}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 font-light leading-relaxed">
                        {excerpt}
                    </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
        </Link>
    );
}
