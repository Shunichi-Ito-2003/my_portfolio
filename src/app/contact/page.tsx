"use client";

import { Mail, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="relative min-h-[80vh] flex flex-col justify-center px-6 py-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src="/my_portfolio/images/contact-bg.jpg"
                    alt="Okinawa Background"
                    className="w-full h-full object-cover object-center opacity-0 animate-in fade-in duration-1000"
                    onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto w-full">
                <header className="mb-16 text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl font-cinematic font-bold tracking-[0.2em] text-white">CONTACT</h1>
                    <p className="text-gold/80 font-serif tracking-widest">お問い合わせ</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center md:text-left">
                        <p className="text-lg text-white/70 leading-loose">
                            出演依頼、脚本執筆のご相談、その他お問い合わせは<br />
                            以下のメールアドレスまたはSNSのDMよりお願いいたします。
                        </p>

                        <a href="mailto:changeupandshake@gmail.com" className="inline-flex items-center gap-4 text-xl md:text-2xl font-cinematic text-gold hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                            <span>changeupandshake@gmail.com</span>
                        </a>
                    </div>

                    <div className="flex flex-col gap-6 p-10 border border-white/10 bg-black/40 backdrop-blur-md rounded-sm">
                        <h3 className="text-center font-cinematic tracking-widest text-white mb-4">SOCIAL MEDIA</h3>

                        <a href="https://www.instagram.com/icchii_ito/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/5 transition-all group">
                            <Instagram className="w-5 h-5 text-white/60 group-hover:text-gold" />
                            <span className="tracking-wider text-sm">@icchii_ito</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
