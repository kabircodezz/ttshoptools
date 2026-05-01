import * as React from 'react'
import { Check, Minus } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Heading2, BodyLarge } from '@/components/layout/Typography'
import { cn } from '@/lib/utils'

export interface ComparisonRow {
  label: string
  // values[0] is "us"; values[1..] map to competitors[]
  values: Array<string | boolean>
}

export interface ComparisonTableProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  usLabel?: string
  competitors: string[]
  rows: ComparisonRow[]
  className?: string
}

function renderCell(value: string | boolean, highlight = false) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check
        className={cn(
          'mx-auto h-5 w-5',
          highlight ? 'text-brand-accent' : 'text-brand-text-secondary',
        )}
        aria-label="Included"
      />
    ) : (
      <Minus className="mx-auto h-5 w-5 text-brand-text-muted" aria-label="Not included" />
    )
  }
  return (
    <span
      className={cn(
        'block text-center text-xs md:text-sm',
        highlight ? 'font-semibold text-brand-text-primary' : 'text-brand-text-secondary',
      )}
    >
      {value}
    </span>
  )
}

export function ComparisonTable({
  title,
  subtitle,
  usLabel = 'Us',
  competitors,
  rows,
  className,
}: ComparisonTableProps) {
  const colCount = competitors.length + 1

  return (
    <Section variant="compact" width="full" className={cn('bg-brand-bg', className)}>
      {(title || subtitle) && (
        <div className="mx-auto max-w-2xl text-center mb-10 md:mb-12">
          {title ? <Heading2 className="text-brand-text-primary">{title}</Heading2> : null}
          {subtitle ? (
            <BodyLarge className="mt-4 text-brand-text-secondary">{subtitle}</BodyLarge>
          ) : null}
        </div>
      )}

      <div className="mx-auto max-w-6xl rounded-2xl border border-brand-border bg-brand-surface overflow-hidden">
        <div
          className="grid border-b border-brand-border"
          style={{ gridTemplateColumns: `minmax(140px, 1.4fr) repeat(${colCount}, minmax(80px, 1fr))` }}
        >
          <div className="px-3 md:px-5 py-4 text-xs md:text-sm font-medium text-brand-text-muted uppercase tracking-wide">
            Feature
          </div>
          <div className="px-3 md:px-5 py-4 text-center text-xs md:text-sm font-semibold text-brand-text-primary bg-brand-accent-light border-l border-r border-brand-accent">
            {usLabel}
          </div>
          {competitors.map((c) => (
            <div
              key={c}
              className="px-3 md:px-5 py-4 text-center text-xs md:text-sm font-medium text-brand-text-secondary"
            >
              {c}
            </div>
          ))}
        </div>

        {rows.map((row, idx) => (
          <div
            key={row.label}
            className={cn(
              'grid items-center',
              idx < rows.length - 1 && 'border-b border-brand-border',
            )}
            style={{ gridTemplateColumns: `minmax(140px, 1.4fr) repeat(${colCount}, minmax(80px, 1fr))` }}
          >
            <div className="px-3 md:px-5 py-4 text-xs md:text-sm font-medium text-brand-text-primary">
              {row.label}
            </div>
            <div className="px-3 md:px-5 py-4 bg-brand-accent-light border-l border-r border-brand-accent">
              {renderCell(row.values[0], true)}
            </div>
            {competitors.map((c, ci) => (
              <div key={c} className="px-3 md:px-5 py-4">
                {renderCell(row.values[ci + 1] ?? false, false)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}
