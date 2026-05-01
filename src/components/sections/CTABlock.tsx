import * as React from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Heading2, BodyLarge, Body, Label } from '@/components/layout/Typography'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface CTABlockProps {
  variant?: 'dark' | 'accent' | 'bordered'
  title: React.ReactNode
  subtitle?: React.ReactNode
  price?: { amount: string; original?: string; suffix?: string }
  checklist?: string[]
  cta: { label: string; href: string }
  fineprint?: React.ReactNode
  className?: string
}

const surfaceStyles = {
  dark: 'bg-brand-text-primary text-brand-bg border border-brand-text-primary',
  accent: 'bg-brand-accent text-brand-accent-text border border-brand-accent',
  bordered: 'bg-brand-surface border border-brand-border',
} as const

const titleStyles = {
  dark: 'text-brand-bg',
  accent: 'text-brand-accent-text',
  bordered: 'text-brand-text-primary',
} as const

const subtitleStyles = {
  dark: 'text-brand-bg/70',
  accent: 'text-brand-accent-text/80',
  bordered: 'text-brand-text-secondary',
} as const

const checklistTextStyles = {
  dark: 'text-brand-bg/90',
  accent: 'text-brand-accent-text/90',
  bordered: 'text-brand-text-primary',
} as const

const checklistIconWrapStyles = {
  dark: 'bg-brand-bg/15 text-brand-bg',
  accent: 'bg-brand-accent-text/15 text-brand-accent-text',
  bordered: 'bg-brand-accent-light text-brand-accent',
} as const

const priceMutedStyles = {
  dark: 'text-brand-bg/50',
  accent: 'text-brand-accent-text/60',
  bordered: 'text-brand-text-muted',
} as const

const buttonVariantByCard = {
  dark: 'secondary',
  accent: 'secondary',
  bordered: 'primary',
} as const

export function CTABlock({
  variant = 'bordered',
  title,
  subtitle,
  price,
  checklist,
  cta,
  fineprint,
  className,
}: CTABlockProps) {
  return (
    <Section variant="standard" width="wide" className={cn('bg-brand-bg', className)}>
      <div
        className={cn(
          'mx-auto max-w-3xl rounded-2xl p-8 md:p-12 text-center',
          surfaceStyles[variant],
        )}
      >
        <Heading2 className={titleStyles[variant]}>{title}</Heading2>
        {subtitle ? (
          <BodyLarge className={cn('mt-3 mx-auto max-w-xl', subtitleStyles[variant])}>
            {subtitle}
          </BodyLarge>
        ) : null}

        {price ? (
          <div className="mt-7 flex items-baseline justify-center gap-2">
            <span className={cn('text-4xl md:text-5xl font-bold tracking-tight', titleStyles[variant])}>
              {price.amount}
            </span>
            {price.original ? (
              <span className={cn('text-base line-through', priceMutedStyles[variant])}>
                {price.original}
              </span>
            ) : null}
            {price.suffix ? (
              <Label className={cn('normal-case tracking-normal text-sm', priceMutedStyles[variant])}>
                {price.suffix}
              </Label>
            ) : null}
          </div>
        ) : null}

        {checklist && checklist.length > 0 ? (
          <ul className="mt-7 mx-auto max-w-md flex flex-col gap-3 text-left">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className={cn(
                    'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                    checklistIconWrapStyles[variant],
                  )}
                >
                  <Check className="h-3 w-3" />
                </span>
                <Body className={cn(checklistTextStyles[variant])}>{item}</Body>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-8 mx-auto max-w-xs">
          <Button asChild variant={buttonVariantByCard[variant]} size="lg" className="w-full">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>

        {fineprint ? (
          <Body className={cn('mt-3 text-xs', priceMutedStyles[variant])}>{fineprint}</Body>
        ) : null}
      </div>
    </Section>
  )
}
