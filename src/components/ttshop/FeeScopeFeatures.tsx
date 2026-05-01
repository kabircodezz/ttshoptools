import { Section } from '@/components/layout/Section'
import { Heading2 } from '@/components/layout/Typography'

const FEATURES = [
  {
    n: '01',
    title: 'Automatic settlement reconciliation',
    desc: "TikTok's payout file changes format constantly. FeeScope parses every version automatically — no broken exports.",
  },
  {
    n: '02',
    title: 'Per-SKU profit with COGS',
    desc: 'Seller Center shows fees. We add your COGS and shipping to show actual margin per product.',
  },
  {
    n: '03',
    title: 'Affiliate vs organic traffic split',
    desc: 'Attribution at 20% commission vs 0%. Know exactly which traffic source is actually profitable.',
  },
  {
    n: '04',
    title: 'Per-creator ROI calculator',
    desc: "Creator A at 10% commission vs 20%. Who's actually making you money? FeeScope tells you.",
  },
  {
    n: '05',
    title: 'Fee change alerts',
    desc: 'TikTok shifts category rates without announcement. FeeScope alerts you within 24 hours.',
  },
  {
    n: '06',
    title: 'Return rate damage tracker',
    desc: 'Shipping + refund + COGS = how much each return actually costs. Track the sellers who hurt you most.',
  },
  {
    n: '07',
    title: 'Cash flow timeline',
    desc: 'TikTok pays 7–90 days late. FeeScope projects settlement dates so you can predict cash position.',
  },
]

export function FeeScopeFeatures() {
  return (
    <Section variant="standard" width="wide" className="bg-brand-surface border-t border-brand-border">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-medium uppercase tracking-wider text-brand-accent">
          FeeScope does more
        </p>
        <Heading2 className="mt-3 text-brand-text-primary">
          Connect your store. Get the{' '}
          <span className="text-brand-accent">7 things</span> no other tool does.
        </Heading2>
      </div>
      <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
        {FEATURES.map((f) => (
          <article
            key={f.n}
            className="flex gap-4 rounded-xl border border-brand-border bg-brand-bg p-5 md:p-6"
          >
            <span className="mt-0.5 inline-flex h-6 shrink-0 items-center rounded bg-brand-accent-light px-1.5 text-[10px] font-medium tracking-wide text-brand-accent">
              {f.n}
            </span>
            <div>
              <h3 className="text-[14px] md:text-[15px] font-medium text-brand-text-primary">
                {f.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-brand-text-secondary">
                {f.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
