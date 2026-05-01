import { Section } from '@/components/layout/Section'
import { Heading2 } from '@/components/layout/Typography'

const FEATURES = [
  {
    title: 'Sample-to-post tracking',
    desc: 'See which creators posted content after getting a sample — and which ones ghosted. Automatic follow-ups for the ghosts, resource reallocation for the rest.',
  },
  {
    title: 'Per-creator net ROI',
    desc: "GMV minus commission minus sample cost minus attributed ad spend. See who's actually making you money — and cut the rest.",
  },
  {
    title: 'Pipeline for 100+ creators',
    desc: 'A single view across every creator relationship: status, last contact, performance. Manage at scale — not one Seller Center tab at a time.',
  },
]

export function CollabHQFeatures() {
  return (
    <Section variant="standard" width="wide" className="bg-brand-bg border-t border-brand-border">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-medium uppercase tracking-wider text-brand-coral">
          What CollabHQ does
        </p>
        <Heading2 className="mt-3 text-brand-text-primary">
          Built to track{' '}
          <span className="text-brand-coral">what actually happens</span> after the invite.
        </Heading2>
        <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-brand-leaf-border bg-brand-leaf-light px-3 py-1">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-leaf" />
          <span className="text-[11px] font-medium text-brand-leaf-text">
            Verified · Official TikTok Shop Partner API
          </span>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-3xl flex flex-col gap-4">
        {FEATURES.map((f) => (
          <article
            key={f.title}
            className="flex items-start gap-4 rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6"
          >
            <div
              aria-hidden
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-accent-light"
            >
              <span className="block h-3.5 w-3.5 rounded-[2px] bg-brand-accent" />
            </div>
            <div className="flex-1 min-w-0">
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
