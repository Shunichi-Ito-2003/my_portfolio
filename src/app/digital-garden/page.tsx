"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function DigitalGardenPage() {
    const { t, language } = useLanguage();

    // Mock data for digital garden / monologue entries
    const posts = [
        {
            id: "1",
            date: "2024.01.20",
            title: language === "ja" ? "演劇と医学の交差点" : "Intersection of Theater and Medicine",
            excerpt: language === "ja" ? "人間の身体を知ることは、感情を知ることにつながる。解剖学から紐解く身体表現の可能性について。" : "Understanding the human body leads to understanding emotions. Exploring physical expression through anatomy."
        },
        {
            id: "2",
            date: "2024.01.15",
            title: language === "ja" ? "カンヌへの道筋" : "Road to Cannes",
            excerpt: language === "ja" ? "2026年の受賞に向けて、今必要な準備とは何か。具体的なロードマップを思考する。" : "What preparation is needed now for the 2026 award? Thinking about a concrete roadmap."
        },
        {
            id: "3",
            date: "2024.01.10",
            title: language === "ja" ? "日常という舞台" : "The Stage of Daily Life",
            excerpt: language === "ja" ? "意識を変えるだけで、見慣れた景色は映画のワンシーンに変わる。" : "By changing your consciousness, familiar scenery turns into a movie scene."
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-background">
            <div className="max-w-6xl mx-auto space-y-16 animate-in fade-in duration-700">

                <section className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-cinematic font-bold text-white tracking-[0.2em] uppercase">
                        {t('monologue')}
                    </h1>
                    <p className="text-white/40 tracking-widest uppercase text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                        Thinking Process & Daily Log
                    </p>
                </section>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Link
                            href={`#`}
                            key={post.id}
                            className="group block border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] p-6 transition-all duration-300 hover:border-white/20"
                        >
                            <div className="space-y-4">
                                <span className="text-xs font-cinematic tracking-widest text-white/40 group-hover:text-accent transition-colors">
                                    {post.date}
                                </span>
                                <h2 className="text-xl font-japanese font-bold text-white/90 group-hover:text-white leading-relaxed min-h-[3.5rem]">
                                    {post.title}
                                </h2>
                                <p className="text-sm font-japanese text-white/60 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="pt-4 flex items-center text-xs font-cinematic tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                    READ MORE →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
