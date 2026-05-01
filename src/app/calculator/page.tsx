import type { Metadata } from 'next'
import { SiteNav } from '@/components/ttshop/SiteNav'
import { FunnelHero } from '@/components/ttshop/FunnelHero'
import { FeeScopeStats } from '@/components/ttshop/FeeScopeStats'
import { FeeScopeCalculator } from '@/components/ttshop/FeeScopeCalculator'
import { FeeScopeFeatures } from '@/components/ttshop/FeeScopeFeatures'
import { EmailCapture } from '@/components/ttshop/EmailCapture'
import { FounderBlock } from '@/components/ttshop/FounderBlock'
import { FAQ } from '@/components/ttshop/FAQ'
import { FooterTrust } from '@/components/ttshop/FooterTrust'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'FeeScope — See your true TikTok Shop profit (free calculator)',
  description:
    'Most sellers model 7–10% in fees. Reality is 35–55%. FeeScope shows exactly what TikTok takes and what you actually keep on every order.',
  alternates: { canonical: `${SITE_URL}/calculator` },
  openGraph: {
    title: 'FeeScope — See your true TikTok Shop profit',
    description:
      'Free per-order profit calculator for TikTok Shop sellers. Built on the official Partner API.',
    url: `${SITE_URL}/calculator`,
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    question: 'When does FeeScope launch?',
    answer:
      "We're targeting launch within 30 days. Founders get access first, before anyone on the general waitlist.",
  },
  {
    question: 'What does it connect to?',
    answer:
      "FeeScope connects to your TikTok Shop via official API. No scraping, no third-party data — direct from TikTok's Partner API.",
  },
  {
    question: 'Is my $1 deposit refundable?',
    answer: 'Yes, fully refundable if you cancel before launch. No questions asked.',
  },
]

export default function FeeScopePage() {
  return (
    <>
      <SiteNav current="feescope" />
      <main>
        <FunnelHero
          badge="Free calculator · All features unlocked · No signup"
          badgeAccent="amber"
          titleLine1="Most sellers model 7–10% in fees."
          titleLine2="Reality is 35–55%."
          subtitle="FeeScope shows you exactly what TikTok takes and what you actually keep — on every order, every SKU, every creator."
        />
        <FeeScopeStats />
        <FeeScopeCalculator />
        <FeeScopeFeatures />
        <EmailCapture product="feescope" title="Notify me when FeeScope launches" />
        <FounderBlock
          product="feescope"
          founderPrice="$11"
          regularPrice="$19"
          savingsYear="$96/year"
          savingsThreeYear="$288 over 3 years"
          description="Your $1 locks in $11/mo for life — even when prices go up."
        />
        <FAQ items={FAQ_ITEMS} />
      </main>
      <FooterTrust />
    </>
  )
}
