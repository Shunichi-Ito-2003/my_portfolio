export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto text-center space-y-8 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                    Projects
                </h1>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                    A showcase of my work and experiments.
                    <br />
                    <span className="text-sm text-accent mt-4 block">(Projects coming soon...)</span>
                </p>

                {/* Placeholder grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-video bg-secondary/20 rounded-xl flex items-center justify-center border border-foreground/5 p-8">
                            <span className="text-foreground/40 font-medium">Project Placeholder {i}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
