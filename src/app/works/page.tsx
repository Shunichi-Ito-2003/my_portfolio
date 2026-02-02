export default function WorksPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            <header className="mb-20 text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-cinematic font-bold tracking-[0.2em] text-white">WORKS</h1>
                <p className="text-gold/80 font-serif tracking-widest">活動アーカイブ</p>
            </header>

            <div className="flex flex-col gap-16">

                {/* Category: Stage / Acting */}
                <section>
                    <h2 className="text-2xl font-cinematic text-white border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-gold">01</span> STAGE & ACTING
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Work Item */}
                        <div className="group relative bg-white/5 border border-white/10 aspect-video overflow-hidden">
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold font-serif text-white mb-2">島守のうた</h3>
                                <p className="text-sm text-white/60 line-clamp-2">
                                    沖縄戦を生き抜いた官僚たちの物語。島田叡役を演じ、各地で上演。
                                </p>
                            </div>
                        </div>
                        {/* Other Work Item */}
                        <div className="group relative bg-white/5 border border-white/10 aspect-video overflow-hidden">
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold font-serif text-white mb-2">まぁさん堂</h3>
                                <p className="text-sm text-white/60 line-clamp-2">
                                    沖縄料理店を舞台にした人情喜劇。脚本・演出を担当。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category: Writing */}
                <section>
                    <h2 className="text-2xl font-cinematic text-white border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-gold">02</span> WRITING & SCRIPTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="text-xs text-gold tracking-widest block mb-2">NOTE ARTICLE</span>
                            <h3 className="font-serif text-lg leading-relaxed mb-4">実家の食堂を『聖地』にするための脚本戦略</h3>
                            <div className="text-xs text-white/40">2026.01.24</div>
                        </div>
                        <div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="text-xs text-gold tracking-widest block mb-2">PLAY SCRIPT</span>
                            <h3 className="font-serif text-lg leading-relaxed mb-4">短編『雨上がりの二人』</h3>
                            <div className="text-xs text-white/40">2025.12.10</div>
                        </div>
                        <div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="text-xs text-gold tracking-widest block mb-2">NOTE ARTICLE</span>
                            <h3 className="font-serif text-lg leading-relaxed mb-4">俳優と医学生の狭間で</h3>
                            <div className="text-xs text-white/40">2025.11.05</div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
