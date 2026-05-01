import { Section } from '@/components/layout/Section'
import { Heading1, BodyLarge } from '@/components/layout/Typography'

interface FunnelHeroProps {
  badge: string
  badgeAccent: 'amber' | 'coral'
  titleLine1: string
  titleLine2: string
  subtitle: string
}

export function FunnelHero({
  badge,
  badgeAccent,
  titleLine1,
  titleLine2,
  subtitle,
}: FunnelHeroProps) {
  const dotClass = badgeAccent === 'coral' ? 'bg-brand-coral' : 'bg-brand-accent'
  const lineClass = badgeAccent === 'coral' ? 'text-brand-coral' : 'text-brand-accent'

  return (
    <Section variant="spacious" width="wide" className="bg-brand-bg">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center gap-5">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-surface px-3 py-1">
          <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
          <span className="text-[11px] text-brand-text-muted">{badge}</span>
        </span>

        <Heading1 className="text-brand-text-primary">
          {titleLine1}
          <br />
          <span className={lineClass}>{titleLine2}</span>
        </Heading1>

        <BodyLarge className="text-brand-text-secondary max-w-2xl">{subtitle}</BodyLarge>
      </div>
    </Section>
  )
}
