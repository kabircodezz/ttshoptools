import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TTShop Tools — The TikTok Shop toolkit built on real data",
    template: "%s · TTShop Tools",
  },
  description:
    "Two tools purpose-built for serious TikTok Shop sellers. Connected directly to TikTok's official Partner API — not scraped, not guessed.",
  openGraph: {
    type: "website",
    siteName: "TTShop Tools",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
