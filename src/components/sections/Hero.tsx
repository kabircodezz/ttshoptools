import * as React from 'react'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { Heading1, BodyLarge, Body, Label } from '@/components/layout/Typography'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface HeroStat {
  value: string
  label: string
}

export interface HeroCTA {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
}

export interface HeroProps {
  variant?: 'centered' | 'split'
  badge?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  ctas?: HeroCTA[]
  stats?: HeroStat[]
  className?: string
}

export function Hero({
  variant = 'centered',
  badge,
  title,
  subtitle,
  ctas = [],
  stats = [],
  className,
}: HeroProps) {
  return (
    <Section
      variant="spacious"
      width={variant === 'centered' ? 'wide' : 'wide'}
      className={cn('bg-brand-bg', className)}
    >
      {variant === 'centered' ? (
        <div className="mx-auto max-w-3xl flex flex-col items-center text-center gap-6">
          {badge ? (
            <Badge variant="default" className="mb-1">
              {badge}
            </Badge>
          ) : null}
          <Heading1 className="text-brand-text-primary">{title}</Heading1>
          {subtitle ? (
            <BodyLarge className="text-brand-text-secondary max-w-2xl">{subtitle}</BodyLarge>
          ) : null}
          {ctas.length > 0 ? (
            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
              {ctas.map((cta) => (
                <Button
                  key={cta.href}
                  asChild
                  variant={cta.variant ?? 'primary'}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1fr_280px] items-center">
          <div className="flex flex-col gap-6">
            {badge ? <Badge variant="default" className="self-start">{badge}</Badge> : null}
            <Heading1 className="text-brand-text-primary">{title}</Heading1>
            {subtitle ? (
              <BodyLarge className="text-brand-text-secondary max-w-2xl">{subtitle}</BodyLarge>
            ) : null}
            {ctas.length > 0 ? (
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                {ctas.map((cta) => (
                  <Button
                    key={cta.href}
                    asChild
                    variant={cta.variant ?? 'primary'}
                    size="lg"
                  >
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                ))}
              </div>
            ) : null}
          </div>

          {stats.length > 0 ? (
            <div className="flex flex-row lg:flex-col gap-3 lg:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 lg:flex-none rounded-xl border border-brand-border bg-brand-surface p-4 lg:p-5"
                >
                  <div className="text-2xl lg:text-3xl font-bold tracking-tight text-brand-text-primary">
                    {stat.value}
                  </div>
                  <Label className="mt-1 block text-brand-text-muted">{stat.label}</Label>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
    </Section>
  )
}

// Re-export for downstream content composition.
export { Body }
