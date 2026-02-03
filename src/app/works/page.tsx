export default function WorksPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            <header className="mb-20 text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-cinematic font-bold tracking-[0.2em] text-white">WORKS</h1>
                <p className="text-gold/80 font-serif tracking-widest">活動アーカイブ</p>
            </header>

            <div className="flex flex-col gap-20">

                {/* Category: Stage / Projects (Main) */}
                <section>
                    <h2 className="text-2xl font-cinematic text-white border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-gold">01</span> MAIN PROJECTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Work Item 1: Shimamori */}
                        <div className="group relative bg-white/5 border border-white/10 aspect-video overflow-hidden">
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-gold text-xs tracking-widest mb-1">STAGE / ACTING</span>
                                <h3 className="text-2xl font-bold font-serif text-white mb-2">島守のうた</h3>
                                <p className="text-sm text-white/60 line-clamp-3 leading-relaxed">
                                    沖縄戦・最後の官選知事である島田叡を演じる。沖縄・栃木・兵庫をつなぐ巡回公演。<br />
                                    「命どぅ宝」を託された男の覚悟と人間味を表現。
                                </p>
                            </div>
                        </div>
                        {/* Work Item 2: Minna ga Santa */}
                        <div className="group relative bg-white/5 border border-white/10 aspect-video overflow-hidden">
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-gold text-xs tracking-widest mb-1">CHARITY PROJECT</span>
                                <h3 className="text-2xl font-bold font-serif text-white mb-2">みんながサンタ！</h3>
                                <p className="text-sm text-white/60 line-clamp-3 leading-relaxed">
                                    「120家庭にケーキを届ける」チャリティー企画。
                                    企画・運営・サンタ役として参加。<br />
                                    演劇のチケット代を支援に変える新しい循環モデルを構築。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Category: Script / Direction */}
                <section>
                    <h2 className="text-2xl font-cinematic text-white border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-gold">02</span> SCRIPT & DIRECTION
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Work Item 3: Masan-do */}
                        <div className="group relative bg-white/5 border border-white/10 aspect-video overflow-hidden">
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span className="text-gold text-xs tracking-widest mb-1">SCRIPT / DIRECTION</span>
                                <h3 className="text-2xl font-bold font-serif text-white mb-2">まぁさん堂</h3>
                                <p className="text-sm text-white/60 line-clamp-3 leading-relaxed">
                                    「誰かを応援する演劇」第一弾。<br />
                                    創業20年を迎える沖縄料理店「まぁさん堂」を舞台にした人情喜劇。<br />
                                    15名のキャストと共に作り上げた地域密着型の物語。
                                </p>
                            </div>
                        </div>
                        {/* Placeholder / Other Script */}
                        <div className="group relative bg-white/5 border border-white/10 aspect-video overflow-hidden flex items-center justify-center">
                            <p className="text-white/30 font-serif tracking-widest">NEXT PROJECT COMING SOON</p>
                        </div>
                    </div>
                </section>

                {/* Category: Writing */}
                <section>
                    <h2 className="text-2xl font-cinematic text-white border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-gold">03</span> WRITING (NOTE)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="https://note.com/icchi_ito/n/nf64aef62c4c3" target="_blank" rel="noopener noreferrer" className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group block">
                            <span className="text-xs text-gold tracking-widest block mb-2">NOTE ARTICLE</span>
                            <h3 className="font-serif text-lg leading-relaxed mb-4 group-hover:text-gold transition-colors">「なにくそ、やるぞ」オリオンビール創業者・具志堅宗精</h3>
                            <div className="text-xs text-white/40">2026.02.01</div>
                        </a>
                        <a href="https://note.com/icchi_ito/n/n801004c8649a" target="_blank" rel="noopener noreferrer" className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group block">
                            <span className="text-xs text-gold tracking-widest block mb-2">NOTE ARTICLE</span>
                            <h3 className="font-serif text-lg leading-relaxed mb-4 group-hover:text-gold transition-colors">死地におもむく知事が、なぜ「明朗」でいられたのか</h3>
                            <div className="text-xs text-white/40">2026.02.02</div>
                        </a>
                        <a href="#" className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group block">
                            <span className="text-xs text-gold tracking-widest block mb-2">NOTE ARTICLE</span>
                            <h3 className="font-serif text-lg leading-relaxed mb-4 group-hover:text-gold transition-colors">凡人の僕が「医学生」と「俳優」を両立するために</h3>
                            <div className="text-xs text-white/40">2026.01.31</div>
                        </a>
                    </div>
                </section>

            </div>
        </div>
    );
}
