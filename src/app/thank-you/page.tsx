import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { SiteNav } from '@/components/ttshop/SiteNav'
import { FooterTrust } from '@/components/ttshop/FooterTrust'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: "You're in — TTShop Tools",
  description: "Your $1 deposit is confirmed. You're on the founders list.",
  robots: { index: false, follow: false },
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>
}) {
  const params = await searchParams
  const product = params?.product === 'collabhq' ? 'collabhq' : 'feescope'

  return (
    <>
      <SiteNav current="thank-you" />
      <main>
        <Section variant="spacious" width="text" className="bg-brand-bg">
          <div className="mx-auto max-w-lg flex flex-col items-center text-center">
            <div
              aria-hidden
              className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-leaf-light"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-leaf">
                <Check className="h-6 w-6 text-white" strokeWidth={3} />
              </span>
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-brand-text-primary">
              You&apos;re in.
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-brand-text-secondary">
              Your $1 deposit is confirmed. You&apos;re on the founders list — you&apos;ll
              get access before anyone else when we launch.
            </p>

            <div className="mt-8 w-full rounded-xl border border-brand-border bg-brand-surface p-6 md:p-8 text-left">
              <p className="text-[11px] font-medium uppercase tracking-wider text-brand-accent">
                What happens next
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "We'll email you your receipt from Stripe",
                  'When we launch, founders get 48-hour early access',
                  'Your rate is locked — it will never go up',
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-text-primary"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-leaf-light"
                    >
                      <Check className="h-2.5 w-2.5 text-brand-leaf" strokeWidth={4} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:justify-center">
              <Button
                asChild
                variant={product === 'feescope' ? 'primary' : 'outline'}
                size="md"
                className="w-full sm:w-auto"
              >
                <Link href="/calculator">Check out FeeScope</Link>
              </Button>
              <Button
                asChild
                variant={product === 'collabhq' ? 'primary' : 'outline'}
                size="md"
                className="w-full sm:w-auto"
              >
                <Link href="/affiliate">Check out CollabHQ</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <FooterTrust />
    </>
  )
}
