"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Works", href: "/works" },
    { name: "Profile", href: "/profile" },
    { name: "Contact", href: "/contact" },
];

export function Navigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Name */}
                <Link href="/" className="text-xl font-cinematic font-bold tracking-widest text-white hover:text-gold transition-colors">
                    ITOU SHUNICHI
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-light tracking-widest uppercase transition-all duration-300 hover:text-gold",
                                pathname === item.href ? "text-gold border-b border-gold" : "text-white/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-gold transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 border-b border-white/10 animate-in slide-in-from-top-2">
                    <div className="flex flex-col p-6 gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-lg font-light tracking-widest uppercase py-2 transition-colors",
                                    pathname === item.href ? "text-gold" : "text-white/70"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
