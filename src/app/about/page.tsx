"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
    const { language, t } = useLanguage();

    return (
        <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto space-y-24 animate-fade-in-up">

                {/* Header Section */}
                <section className="text-center space-y-6 mb-12">
                    <h1 className="text-4xl md:text-5xl font-cinematic font-bold text-white tracking-widest uppercase">
                        {t('about')}
                    </h1>
                    <p className="text-xl font-light text-foreground/80 max-w-2xl mx-auto leading-relaxed font-japanese">
                        {language === 'ja'
                            ? "言葉、身体、そして心の深淵を探求する表現者。"
                            : "Exploring the boundaries of technology and entertainment."}
                    </p>
                </section>

                {/* Section 1: The Student / Intelligent (Formal) */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 space-y-8">
                        <h2 className="text-2xl font-cinematic text-gold tracking-widest flex items-center gap-4">
                            <span className="h-[1px] w-8 bg-gold/50 inline-block" />
                            THE STUDENT
                        </h2>
                        <div className="space-y-6 text-foreground/90 leading-relaxed font-japanese text-justify">
                            <p>
                                普段は医学部に通い、生命の仕組みと向き合っています。「論理」と「生命」の世界に身を置くことで、世界を客観的に捉える視座を養っています。
                            </p>
                            <div className="bg-secondary/30 backdrop-blur-sm border border-white/10 p-6 rounded-sm">
                                <ul className="space-y-3 text-sm font-japanese text-white/70">
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Affiliation</span>
                                        <span className="text-white">琉球大学 医学部</span>
                                    </li>
                                    <li className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Born</span>
                                        <span className="text-white">2003</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Location</span>
                                        <span className="text-white">Okinawa, Japan</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 relative aspect-[3/4] md:aspect-square overflow-hidden group border border-white/10">
                        <img
                            src="/my_portfolio/images/about-formal.jpg"
                            alt="Shunichi Ito - Formal"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>
                </section>

                {/* Section 2: The Actor / Human (Casual) */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-1 relative aspect-[3/4] md:aspect-square overflow-hidden group border border-white/10">
                        <img
                            src="/my_portfolio/images/about-casual.jpg"
                            alt="Shunichi Ito - Casual"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>

                    <div className="order-2 space-y-8">
                        <h2 className="text-2xl font-cinematic text-gold tracking-widest flex items-center gap-4">
                            <span className="h-[1px] w-8 bg-gold/50 inline-block" />
                            THE ACTOR
                        </h2>
                        <div className="space-y-6 text-foreground/90 leading-relaxed font-japanese text-justify">
                            <p>
                                「演劇は世界を平和にする」<br />
                                その信念のもと、沖縄を拠点に俳優として活動しています。
                                演劇を通して自分が押し殺していた感情を知るだけで、ふっと肩の力が抜けることがあります。私は演劇を広く普及させることが、たくさんの人の豊かさにつながると信じています。
                            </p>
                            <p>
                                2024年、実際にカンヌ国際映画祭の現地を訪れ、そのエネルギーに圧倒されました。「今度は作品といっしょにこの地に立つ」という決意を胸に、日々邁進しています。
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
