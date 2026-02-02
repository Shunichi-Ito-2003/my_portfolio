"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Edit3 } from "lucide-react";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/5 h-20 transition-all duration-300">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-cinematic font-bold tracking-[0.1em] text-white hover:text-accent transition-colors">
            ITOU SHUNICHI
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/about" className="text-xs font-cinematic tracking-widest uppercase text-white/80 hover:text-accent transition-colors">
            {t('about')}
          </Link>
          <Link href="/projects" className="text-xs font-cinematic tracking-widest uppercase text-white/80 hover:text-accent transition-colors">
            {t('filmography')}
          </Link>
          <Link href="/digital-garden" className="text-xs font-cinematic tracking-widest uppercase text-white/80 hover:text-accent transition-colors">
            {t('monologue')}
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <LanguageToggle />

          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://note.com/shunichi_itou" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
              <Edit3 size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
