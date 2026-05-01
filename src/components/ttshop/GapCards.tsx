import { Section } from '@/components/layout/Section'

const GAPS = [
  {
    n: 'GAP 01',
    title: 'The sample black hole',
    desc: "You shipped samples to 50 creators. Seller Center doesn't tell you how many posted, let alone how many drove sales.",
  },
  {
    n: 'GAP 02',
    title: 'The volume ceiling',
    desc: "Managing 10 creators in Seller Center is annoying. Managing 100 is impossible. The platform wasn't built for scale.",
  },
  {
    n: 'GAP 03',
    title: 'ROI invisibility',
    desc: "You know which creator drove the most GMV. You don't know which one was actually worth it after samples, commission, and ad spend.",
  },
]

export function GapCards() {
  return (
    <Section variant="standard" width="wide" className="bg-brand-surface border-t border-brand-border">
      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        {GAPS.map((g) => (
          <article
            key={g.n}
            className="rounded-xl border border-brand-border bg-brand-bg p-6"
          >
            <p className="text-[10px] font-medium uppercase tracking-wider text-brand-coral">
              {g.n}
            </p>
            <h3 className="mt-2 text-[14px] font-semibold text-brand-text-primary">
              {g.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-brand-text-secondary">
              {g.desc}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
