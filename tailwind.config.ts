import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                gold: "#d4af37",
                secondary: "#1a1a1a",
            },
            fontFamily: {
                serif: ["var(--font-noto-serif-jp)", "serif"],
                cinematic: ["var(--font-cinzel)", "serif"],
                japanese: ["var(--font-shippori-mincho)", "serif"],
            },
        },
    },
    plugins: [],
};
export default config;
