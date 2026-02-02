"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Ticket, BookOpen, PenTool } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-[calc(100vh-5rem)]">
            {/* Hero Section */}
            <section className="flex-grow flex flex-col justify-center items-center text-center px-6 py-20 bg-gradient-to-b from-transparent to-black/40">
                <div className="max-w-4xl space-y-6 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-5">
                    <h1 className="text-5xl md:text-8xl font-bold font-cinematic tracking-[0.2em] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">
                        {t('name')}
                    </h1>

                    <p className="text-xl md:text-3xl text-gold/80 tracking-widest uppercase font-light font-serif">
                        {t('job')}
                    </p>

                    <p className="text-sm md:text-base text-white/40 tracking-wider font-light">
                        {t('university')}
                    </p>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-16 px-6 bg-secondary/30 backdrop-blur-sm border-t border-white/5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* News / Ticket Link */}
                    <Link href="/news" className="group p-8 border border-white/10 bg-black/40 hover:bg-white/5 transition-all duration-500 flex flex-col items-center text-center space-y-4">
                        <Ticket className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-xl font-cinematic tracking-widest text-white">LATEST NEWS</h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                            出演情報・チケット予約はこちら
                        </p>
                    </Link>

                    {/* Works Link */}
                    <Link href="/works" className="group p-8 border border-white/10 bg-black/40 hover:bg-white/5 transition-all duration-500 flex flex-col items-center text-center space-y-4">
                        <BookOpen className="w-8 h-8 text-white/70 group-hover:text-gold transition-colors duration-500" />
                        <h3 className="text-xl font-cinematic tracking-widest text-white">WORKS</h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                            島守のうた・Note・活動アーカイブ
                        </p>
                    </Link>

                    {/* Contact Link */}
                    <Link href="/contact" className="group p-8 border border-white/10 bg-black/40 hover:bg-white/5 transition-all duration-500 flex flex-col items-center text-center space-y-4">
                        <PenTool className="w-8 h-8 text-white/70 group-hover:text-gold transition-colors duration-500" />
                        <h3 className="text-xl font-cinematic tracking-widest text-white">CONTACT</h3>
                        <p className="text-sm text-white/50 leading-relaxed">
                            お仕事のご依頼・お問い合わせ
                        </p>
                    </Link>
                </div>
            </section>
        </div>
    );
}
