"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ja" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    en: {
        about: "About",
        filmography: "Filmography",
        monologue: "Monologue",
        contact: "Contact",
        projects: "Projects",
        digitalGarden: "Digital Garden",
        readMore: "Read More",
        profile: "Profile",
        values: "Values",
        name: "ITO SHUNICHI",
        job: "Actor / Medical Student",
        university: "Ryukyu University School of Medicine",
    },
    ja: {
        about: "私について",
        filmography: "出演実績",
        monologue: "思考の庭",
        contact: "コンタクト",
        projects: "プロジェクト",
        digitalGarden: "デジタルガーデン",
        readMore: "もっと読む",
        profile: "プロフィール",
        values: "価値観",
        name: "伊藤 駿一",
        job: "俳優 / 医学生",
        university: "琉球大学 医学部",
    },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("ja");

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) setLanguage(savedLang);
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
