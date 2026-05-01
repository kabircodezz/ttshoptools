import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Heading1, BodyLarge } from '@/components/layout/Typography'
import { Button } from '@/components/ui/button'

const STATS = [
  { value: '$0', label: 'scraped data', accent: true },
  { value: '100%', label: 'official API', accent: true },
  { value: '2', label: 'tools, one platform', accent: false },
]

export function HomeHero() {
  return (
    <Section variant="spacious" width="wide" className="bg-brand-bg">
      <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_280px] items-start">
        <div className="flex flex-col gap-6">
          <span className="self-start inline-flex items-center gap-1.5 rounded-full bg-brand-accent-light px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden />
            <span className="text-[11px] font-medium tracking-wide text-brand-accent-dark">
              Official TikTok Shop Partner API
            </span>
          </span>

          <Heading1 className="text-brand-text-primary">
            The TikTok Shop toolkit. Built on{' '}
            <span className="text-brand-accent">real data</span>, not estimates.
          </Heading1>

          <BodyLarge className="text-brand-text-secondary max-w-2xl">
            Two tools purpose-built for serious TikTok Shop sellers. Connected directly
            to TikTok&apos;s official APIs — not scraped, not guessed.
          </BodyLarge>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
              <Link href="/calculator">Calculate my true profit →</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/affiliate">Manage my creators →</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:hidden mt-2">
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} accent={s.accent} />
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          {STATS.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} accent={s.accent} />
          ))}
        </div>
      </div>
    </Section>
  )
}

function StatCard({ value, label, accent }: { value: string; label: string; accent: boolean }) {
  return (
    <div className="rounded-xl border border-brand-border bg-brand-surface p-4 lg:p-5">
      <div
        className={`text-[22px] lg:text-3xl font-bold tracking-tight leading-none ${
          accent ? 'text-brand-accent' : 'text-brand-text-primary'
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-[11px] text-brand-text-muted">{label}</div>
    </div>
  )
}
