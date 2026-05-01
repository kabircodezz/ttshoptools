import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { brand } from '@/brand'
import { brandCssVars } from '@/lib/brand-css'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: brand.siteName,
  description: 'A reusable Next.js 15 starter template for marketing sites and landing pages.',
  metadataBase: new URL(brand.siteUrl),
}

export const viewport: Viewport = {
  themeColor: brand.bg,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
