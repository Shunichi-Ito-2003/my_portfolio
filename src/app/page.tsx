"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-[calc(100vh-5rem)] justify-center items-center p-8 text-center bg-gradient-to-b from-transparent to-black/20">
            <div className="max-w-4xl space-y-8 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-5">
                <h1 className="text-4xl md:text-7xl font-bold font-cinematic tracking-[0.2em] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                    {t('name')}
                </h1>

                <p className="text-xl md:text-2xl text-white/60 tracking-widest uppercase font-light">
                    {t('job')}
                </p>

                <p className="text-sm md:text-base text-white/40 tracking-wider">
                    {t('university')}
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                    <Link href="/about">
                        <Button size="lg" className="rounded-none border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-500 w-full md:w-auto">
                            <span className="tracking-[0.2em] mr-2">{t('profile')}</span>
                            <ArrowRight size={16} />
                        </Button>
                    </Link>
                    <Link href="/digital-garden">
                        <Button size="lg" variant="outline" className="rounded-none border-white/10 hover:bg-white/5 hover:text-white transition-all duration-500 w-full md:w-auto">
                            <span className="tracking-[0.2em]">{t('digitalGarden')}</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
