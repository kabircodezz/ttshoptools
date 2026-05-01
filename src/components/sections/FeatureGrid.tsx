import * as React from 'react'
import { Section } from '@/components/layout/Section'
import { Heading2, Heading3, BodyLarge, Body, Label } from '@/components/layout/Typography'
import { cn } from '@/lib/utils'

export interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
  number?: string
}

export interface FeatureGridProps {
  variant?: 'twoCol' | 'threeCol' | 'list'
  eyebrow?: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  features: Feature[]
  className?: string
}

export function FeatureGrid({
  variant = 'threeCol',
  eyebrow,
  title,
  subtitle,
  features,
  className,
}: FeatureGridProps) {
  return (
    <Section variant="standard" width="wide" className={cn('bg-brand-bg', className)}>
      {(eyebrow || title || subtitle) && (
        <div className="mb-12 md:mb-16 max-w-2xl">
          {eyebrow ? (
            <Label className="text-brand-accent mb-3 block">{eyebrow}</Label>
          ) : null}
          {title ? (
            <Heading2 className="text-brand-text-primary">{title}</Heading2>
          ) : null}
          {subtitle ? (
            <BodyLarge className="mt-4 text-brand-text-secondary">{subtitle}</BodyLarge>
          ) : null}
        </div>
      )}

      {variant === 'list' ? (
        <div className="flex flex-col divide-y divide-brand-border">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="flex flex-row items-start gap-4 md:gap-6 py-6 md:py-8 first:pt-0 last:pb-0"
            >
              <div className="shrink-0 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-brand-accent-light text-brand-text-primary">
                {feat.icon ?? (
                  <span className="text-sm md:text-base font-semibold">
                    {feat.number ?? ''}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <Heading3 className="text-brand-text-primary">{feat.title}</Heading3>
                <Body className="mt-2 text-brand-text-secondary">{feat.description}</Body>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className={cn(
            'grid grid-cols-1',
            variant === 'twoCol' && 'md:grid-cols-2 gap-8 md:gap-12',
            variant === 'threeCol' && 'md:grid-cols-3 gap-6 md:gap-8',
          )}
        >
          {features.map((feat) => (
            <article
              key={feat.title}
              className="rounded-xl border border-brand-border bg-brand-surface p-6 md:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent-light text-brand-text-primary mb-5">
                {feat.icon ?? (
                  <span className="text-sm font-semibold">{feat.number ?? ''}</span>
                )}
              </div>
              <Heading3 className="text-brand-text-primary">{feat.title}</Heading3>
              <Body className="mt-2 text-brand-text-secondary">{feat.description}</Body>
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
