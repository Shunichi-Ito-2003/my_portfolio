"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
    const { language, t } = useLanguage();

    return (
        <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto space-y-16 animate-fade-in-up">

                {/* Header Section */}
                <section className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-cinematic font-bold text-white tracking-widest uppercase">
                        {t('about')}
                    </h1>
                    <p className="text-xl font-light text-foreground/80 max-w-2xl mx-auto leading-relaxed font-japanese">
                        {language === 'ja'
                            ? "言葉、身体、そして心の深淵を探求する表現者。"
                            : "Exploring the boundaries of technology and entertainment to create meaningful experiences."}
                    </p>
                </section>

                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">

                    {/* Sidebar / Profile Card */}
                    <div className="bg-secondary/30 backdrop-blur-sm rounded-none border border-white/10 p-8 space-y-6">
                        <h3 className="text-lg font-cinematic font-bold border-b border-accent/20 pb-2 text-accent tracking-widest">
                            {t('profile')}
                        </h3>
                        <ul className="space-y-4 text-sm text-foreground/80 font-japanese">
                            <li>
                                <span className="block text-[10px] font-cinematic uppercase tracking-wider text-white/40 mb-1">Name</span>
                                {t('name')}
                            </li>
                            <li>
                                <span className="block text-[10px] font-cinematic uppercase tracking-wider text-white/40 mb-1">Born</span>
                                2003
                            </li>
                            <li>
                                <span className="block text-[10px] font-cinematic uppercase tracking-wider text-white/40 mb-1">Affiliation</span>
                                {language === 'ja' ? "01 ENTERTAINMENT" : "01 ENTERTAINMENT"}
                            </li>
                            <li>
                                <span className="block text-[10px] font-cinematic uppercase tracking-wider text-white/40 mb-1">University</span>
                                {t('university')}
                            </li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-8 text-foreground/90 leading-relaxed font-japanese text-justify">
                        {language === 'ja' ? (
                            <>
                                <p>
                                    沖縄を拠点に俳優として活動しています。
                                    普段は大学の医学部に通いつつ、演技の稽古に励む傍ら、「カンヌ国際映画祭主演男優賞」を目標にし、「演劇は世界を平和にする」という信念のもと、活動しています。
                                </p>
                                <p>
                                    2024年、実際にカンヌ国際映画祭の現地を訪れ、そのエネルギーに圧倒されました。「今度は作品といっしょにこの地に立つ」という決意を胸に、日々邁進しています。
                                </p>

                                <h3 className="text-2xl font-cinematic font-bold text-white pt-8 tracking-widest">
                                    VISION
                                </h3>
                                <p>
                                    演劇が持つ可能性。それは「人の前に立つことに慣れる」こと、「自身の心を深掘りし他者への理解を深める」こと、そして「社会の抑圧から自由になる力を育む」ことです。
                                    演劇を通して自分が押し殺していた感情を知るだけで、ふっと肩の力が抜けることがあります。私は演劇を広く普及させることが、たくさんの人の豊かさにつながると信じています。
                                </p>
                            </>
                        ) : (
                            <>
                                <p>
                                    Based in Okinawa, I am an actor pursuing the intersection of performing arts and medicine.
                                    While studying at medical school, I dedicate myself to acting with the goal of winning the Best Actor award at the Cannes Film Festival.
                                </p>
                                <p>
                                    I believe that "Theater makes the world peaceful." In 2024, I visited Cannes and was overwhelmed by its energy. I vowed to return, next time with my own work.
                                </p>
                                <h3 className="text-2xl font-cinematic font-bold text-white pt-8 tracking-widest">
                                    VISION
                                </h3>
                                <p>
                                    Theater has the power to deepen our understanding of ourselves and others. By exploring suppressed emotions through acting, we can liberate ourselves from social pressures. I believe that spreading the joy of theater contributes to a richer life for everyone.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
