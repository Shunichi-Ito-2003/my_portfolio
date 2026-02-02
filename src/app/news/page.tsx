export default function NewsPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <header className="mb-16 text-center space-y-4">
                <h1 className="text-4xl md:text-6xl font-cinematic font-bold tracking-[0.2em] text-white">NEWS</h1>
                <p className="text-gold/80 font-serif tracking-widest">最新情報</p>
            </header>

            <div className="space-y-12">
                {/* Featured News Item */}
                <article className="border border-gold/30 bg-gradient-to-br from-white/5 to-transparent p-8 md:p-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-9xl font-cinematic text-gold">01</span>
                    </div>

                    <div className="relative z-10 space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm tracking-widest text-white/60 font-mono">
                            <span className="text-gold">UPCOMING</span>
                            <span>2026.02.08</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold font-serif leading-relaxed">
                            舞台『島守のうた』神戸公演
                        </h2>

                        <p className="text-white/70 leading-loose">
                            沖縄・栃木・兵庫をつなぐ物語。神戸での初上演がついに決定いたしました。
                            ご予約は以下のリンクより承っております。
                        </p>

                        <div className="pt-4">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gold/10 hover:bg-gold/20 border border-gold/30 hover:border-gold/60 text-gold tracking-[0.2em] transition-all duration-300"
                            >
                                TICKET
                            </a>
                        </div>
                    </div>
                </article>

                {/* News List */}
                <div className="space-y-6">
                    <article className="flex flex-col md:flex-row gap-6 p-6 border-b border-white/10 hover:bg-white/5 transition-colors">
                        <div className="text-sm text-white/40 font-mono shrink-0 w-32">2026.01.29</div>
                        <div>
                            <h3 className="text-lg font-serif mb-2 text-white/90">神戸メディア掲載のお知らせ</h3>
                            <p className="text-sm text-white/50">『島守のうた』に関する記事が掲載されました。</p>
                        </div>
                    </article>

                    <article className="flex flex-col md:flex-row gap-6 p-6 border-b border-white/10 hover:bg-white/5 transition-colors">
                        <div className="text-sm text-white/40 font-mono shrink-0 w-32">2026.01.24</div>
                        <div>
                            <h3 className="text-lg font-serif mb-2 text-white/90">Note記事更新：実家の食堂を『聖地』にするための脚本戦略</h3>
                            <p className="text-sm text-white/50">演劇を通じた地域活性化についての考察。</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
