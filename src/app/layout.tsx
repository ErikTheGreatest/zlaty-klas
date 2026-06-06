import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pekárna U Zlatého klasu",
    template: "%s | Pekárna U Zlatého klasu",
  },
  description: "Řemeslná pekárna v srdci Prahy. Čerstvý chléb, koláče a káva každý den od 7:00.",
  keywords: ["pekárna", "Praha", "čerstvý chléb", "koláče", "kváskový chléb", "kavárna"],
  openGraph: {
    title: "Pekárna U Zlatého klasu",
    description: "Řemeslná pekárna v srdci Prahy. Čerstvý chléb, koláče a káva každý den.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body
        className={`${playfair.variable} ${inter.variable} bg-krem text-kava font-body antialiased`}
      >
        <Navbar />
        <main className="pt-16 page-transition">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
