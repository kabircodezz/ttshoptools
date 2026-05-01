import type { Metadata } from 'next'
import { SiteNav } from '@/components/ttshop/SiteNav'
import { FunnelHero } from '@/components/ttshop/FunnelHero'
import { GapCards } from '@/components/ttshop/GapCards'
import { WorkflowPipeline } from '@/components/ttshop/WorkflowPipeline'
import { CollabHQCalculator } from '@/components/ttshop/CollabHQCalculator'
import { CollabHQFeatures } from '@/components/ttshop/CollabHQFeatures'
import { TrustStatement } from '@/components/ttshop/TrustStatement'
import { EmailCapture } from '@/components/ttshop/EmailCapture'
import { FounderBlock } from '@/components/ttshop/FounderBlock'
import { FAQ } from '@/components/ttshop/FAQ'
import { FooterTrust } from '@/components/ttshop/FooterTrust'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'CollabHQ — Track which creators actually drive sales',
  description:
    'CollabHQ tracks every creator from sample to post to sale — so you stop guessing which partnerships are actually making you money.',
  alternates: { canonical: `${SITE_URL}/affiliate` },
  openGraph: {
    title: 'CollabHQ — Track which creators actually drive sales',
    description:
      'Free ROI calculator for TikTok Shop creator programs. No signup required.',
    url: `${SITE_URL}/affiliate`,
    type: 'website',
  },
}

const FAQ_ITEMS = [
  {
    question: 'When does CollabHQ launch?',
    answer:
      "We're targeting launch within 30 days. Founders get access first, before anyone on the general waitlist.",
  },
  {
    question: 'Does it connect to my TikTok Shop?',
    answer:
      "Yes. CollabHQ connects via TikTok's official Partner API — not scraping. Real attribution, real data.",
  },
  {
    question: 'Is my $1 deposit refundable?',
    answer: 'Yes, fully refundable if you cancel before launch. No questions asked.',
  },
]

export default function CollabHQPage() {
  return (
    <>
      <SiteNav current="collabhq" />
      <main>
        <FunnelHero
          badge="Free ROI calculator · No signup"
          badgeAccent="coral"
          titleLine1="You sent 50 samples."
          titleLine2="How many turned into sales?"
          subtitle="CollabHQ tracks every creator from sample to post to sale — so you stop guessing which partnerships are actually making you money."
        />
        <GapCards />
        <WorkflowPipeline />
        <CollabHQCalculator />
        <CollabHQFeatures />
        <TrustStatement />
        <EmailCapture product="collabhq" title="Notify me when CollabHQ launches" />
        <FounderBlock
          product="collabhq"
          founderPrice="$25"
          regularPrice="$39"
          savingsYear="$168/year"
          savingsThreeYear="$504 over 3 years"
          description="Your $1 locks in $25/mo for life — even when prices go up."
        />
        <FAQ items={FAQ_ITEMS} />
      </main>
      <FooterTrust />
    </>
  )
}
