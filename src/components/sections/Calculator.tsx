'use client'

import * as React from 'react'
import { Section } from '@/components/layout/Section'
import { Heading2, Heading3, Body, BodyLarge, Label } from '@/components/layout/Typography'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label as FieldLabel } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

export interface CalculatorInputField {
  type: 'input'
  id: string
  label: string
  placeholder?: string
  inputType?: 'text' | 'number' | 'email'
  defaultValue?: string
}

export interface CalculatorSelectField {
  type: 'select'
  id: string
  label: string
  placeholder?: string
  options: { value: string; label: string }[]
  defaultValue?: string
}

export type CalculatorField = CalculatorInputField | CalculatorSelectField

export interface CalculatorResult {
  label: string
  value: string
}

export interface CalculatorProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  fields: CalculatorField[]
  results: CalculatorResult[]
  insight?: React.ReactNode
  freeBadgeLabel?: string
  className?: string
}

export function Calculator({
  title = 'Quick estimator',
  subtitle,
  fields,
  results,
  insight,
  freeBadgeLabel = 'Free',
  className,
}: CalculatorProps) {
  return (
    <Section variant="standard" width="wide" className={cn('bg-brand-bg-secondary', className)}>
      <div className="mx-auto max-w-4xl rounded-2xl border border-brand-border bg-brand-surface p-6 md:p-10 relative">
        <div className="absolute right-4 top-4 md:right-6 md:top-6">
          <Badge variant="solid">{freeBadgeLabel}</Badge>
        </div>

        <div className="mb-8 md:mb-10 max-w-2xl">
          <Heading2 className="text-brand-text-primary">{title}</Heading2>
          {subtitle ? (
            <BodyLarge className="mt-3 text-brand-text-secondary">{subtitle}</BodyLarge>
          ) : null}
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <FieldLabel htmlFor={field.id}>{field.label}</FieldLabel>
              {field.type === 'input' ? (
                <Input
                  id={field.id}
                  type={field.inputType ?? 'text'}
                  placeholder={field.placeholder}
                  defaultValue={field.defaultValue}
                />
              ) : (
                <Select defaultValue={field.defaultValue}>
                  <SelectTrigger id={field.id}>
                    <SelectValue placeholder={field.placeholder ?? 'Select…'} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          ))}
        </form>

        <div className="mt-8 md:mt-10 rounded-xl border border-brand-border bg-brand-bg-secondary p-5 md:p-6">
          <Label className="text-brand-text-muted">Estimated results</Label>
          <div className="mt-3 flex flex-row items-stretch gap-3 md:gap-6">
            {results.map((res, i) => (
              <div
                key={res.label}
                className={cn(
                  'flex-1 min-w-0',
                  i > 0 && 'border-l border-brand-border pl-3 md:pl-6',
                )}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-brand-text-primary truncate">
                  {res.value}
                </div>
                <Label className="mt-1 block text-brand-text-muted normal-case tracking-normal text-[11px] md:text-xs">
                  {res.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {insight ? (
          <div className="mt-5 rounded-xl border border-brand-accent/20 bg-brand-accent-light px-5 py-4">
            <Body className="text-brand-text-primary">{insight}</Body>
          </div>
        ) : null}
      </div>
    </Section>
  )
}

// Re-export for inline content usage
export { Heading3 }
