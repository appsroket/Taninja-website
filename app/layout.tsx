import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | New Jersey Real Estate Agent · ${site.brokerage}`,
  description:
    "Buy, sell, or rent anywhere in New Jersey with Taniaja Turner, a licensed agent with RE/MAX Real Estate Group in Cranford, NJ. Honest advice, fast replies, and someone in your corner from first showing to closing.",
  openGraph: {
    title: `${site.name} — Your New Jersey Real Estate Agent`,
    description: "Buying, selling, or renting in New Jersey? Get a real person in your corner from the first call to the keys.",
    type: "website",
  },
  // Keep the demo out of Google until it's live on her own domain.
  robots: process.env.NEXT_PUBLIC_SITE_URL ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
