"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
            className="flex items-center gap-2 text-xs font-cinematic tracking-widest uppercase text-white/80 hover:text-accent transition-colors"
            aria-label="Toggle language"
        >
            <Globe size={16} />
            <span>{language === "ja" ? "EN" : "JP"}</span>
        </button>
    );
}
