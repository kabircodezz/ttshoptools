import type { Metadata } from 'next'
import { SiteNav } from '@/components/ttshop/SiteNav'
import { HomeHero } from '@/components/ttshop/HomeHero'
import { TrustBanner } from '@/components/ttshop/TrustBanner'
import { HomeComparison } from '@/components/ttshop/HomeComparison'
import { ProductCards } from '@/components/ttshop/ProductCards'
import { FooterTrust } from '@/components/ttshop/FooterTrust'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'TTShop Tools — The TikTok Shop toolkit built on real data',
  description:
    "Two tools purpose-built for serious TikTok Shop sellers. Connected directly to TikTok's official Partner API — not scraped, not guessed.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: 'TTShop Tools — The TikTok Shop toolkit built on real data',
    description:
      "Two tools purpose-built for serious TikTok Shop sellers. Built on TikTok's official Partner API.",
    url: `${SITE_URL}/`,
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      <SiteNav current="home" />
      <main>
        <HomeHero />
        <TrustBanner />
        <HomeComparison />
        <ProductCards />
      </main>
      <FooterTrust />
    </>
  )
}
