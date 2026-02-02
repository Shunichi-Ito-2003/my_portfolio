import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel, Shippori_Mincho } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITOU SHUNICHI | Actor & Creator",
  description: "The official website of Itou Shunichi. Actor, Creator, and Thinker aiming for Cannes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <body
    className={`${playfair.variable} ${inter.variable} ${cinzel.variable} ${shippori.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
  >
    <LanguageProvider>
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
    </LanguageProvider>
  </body>
    </html >
  );
}
