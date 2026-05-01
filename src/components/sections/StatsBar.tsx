import * as React from 'react'
import { Section } from '@/components/layout/Section'
import { Label } from '@/components/layout/Typography'
import { cn } from '@/lib/utils'

export interface Stat {
  value: string
  label: string
}

export interface StatsBarProps {
  stats: Stat[]
  className?: string
}

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <Section
      variant="compact"
      width="wide"
      className={cn('bg-brand-bg-secondary border-y border-brand-border', className)}
    >
      <div className="flex flex-wrap items-stretch justify-center gap-y-6">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              'flex-1 min-w-[140px] basis-1/2 md:basis-0 px-4 md:px-8 text-center',
              i > 0 && 'md:border-l border-brand-border',
            )}
          >
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text-primary">
              {stat.value}
            </div>
            <Label className="mt-2 block text-brand-text-muted">{stat.label}</Label>
          </div>
        ))}
      </div>
    </Section>
  )
}
