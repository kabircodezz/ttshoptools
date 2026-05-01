import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { brand } from '@/brand'
import { brandCssVars } from '@/lib/brand-css'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TTShop Tools — The TikTok Shop toolkit built on real data',
    template: '%s · TTShop Tools',
  },
  description:
    "Two tools purpose-built for serious TikTok Shop sellers. Connected directly to TikTok's official Partner API — not scraped, not guessed.",
  openGraph: {
    type: 'website',
    siteName: 'TTShop Tools',
    url: SITE_URL,
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: brand.bg,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: brandCssVars() }} />
      </head>
      <body className="font-sans bg-brand-bg text-brand-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
