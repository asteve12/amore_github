import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fredoka, Caveat } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CIAO AMORE STUDIO — Handmade with Amore",
  description: "Playful handmade pieces, ceramic charms, and thoughtful finds, created to bring a little more joy to the everyday.",
  keywords: ["art and craft studio", "handmade charms", "ceramics", "custom keychain", "ciao amore"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fredoka.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col justify-between selection:bg-amore-red selection:text-white">
        <div className="paper-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
