import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Itou Shunichi - Cinematic Portrait"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
                {/* Gradients for text readability and mood */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto px-4 animate-fade-in-up">

                <div className="space-y-4">
                    <h2 className="text-accent tracking-[0.2em] text-sm md:text-base font-cinematic uppercase opacity-80">
                        The Official Portfolio
                    </h2>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-cinematic font-bold tracking-tight text-white drop-shadow-2xl">
                        ITOU <br className="md:hidden" /> SHUNICHI
                    </h1>

                    <p className="text-lg md:text-2xl font-japanese font-light tracking-widest text-white/90 mt-6">
                        世界へ挑む、表現者。
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 rounded-none tracking-widest uppercase font-cinematic"
                    >
                        Filmography
                    </Button>
                    <Button
                        variant="primary"
                        size="lg"
                        className="px-8 py-6 text-lg bg-accent text-black hover:bg-white hover:text-black transition-all duration-500 rounded-none tracking-widest uppercase font-cinematic border-none"
                    >
                        Digital Garden
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
            </div>
        </section>
    );
}
