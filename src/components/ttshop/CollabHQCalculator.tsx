'use client'

import * as React from 'react'
import { Section } from '@/components/layout/Section'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

type State = {
  creators: string
  samples: string
  sampleCost: string
  postRate: string
  gmv: string
  commission: string
}

const initial: State = {
  creators: '50',
  samples: '40',
  sampleCost: '12',
  postRate: '35',
  gmv: '180',
  commission: '20',
}

function num(v: string): number {
  const x = parseFloat(v)
  return Number.isFinite(x) ? x : 0
}

export function CollabHQCalculator() {
  const [s, setS] = React.useState<State>(initial)
  const setField =
    (key: keyof State) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setS((prev) => ({ ...prev, [key]: e.target.value }))

  const { wasted, gross, net, wastePct } = React.useMemo(() => {
    const samples = num(s.samples)
    const sampleCost = num(s.sampleCost)
    const postRate = num(s.postRate)
    const gmv = num(s.gmv)
    const commission = num(s.commission)
    const posting = Math.round((samples * postRate) / 100)
    const notPosting = samples - posting
    const wasted = notPosting * sampleCost
    const gross = posting * gmv
    const commissionCost = (gross * commission) / 100
    const totalSampleCost = samples * sampleCost
    const net = gross - commissionCost - totalSampleCost
    const wastePct = samples > 0 ? Math.round((notPosting / samples) * 100) : 0
    return { wasted, gross, net, wastePct }
  }, [s])

  const fmt = (v: number) => `$${Math.round(v).toLocaleString()}`

  return (
    <Section variant="standard" width="wide" className="bg-brand-surface border-t border-brand-border">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-brand-text-primary">
            Creator program ROI calculator
          </span>
          <Badge variant="default">Free · No limits</Badge>
        </div>
        <p className="mt-1 text-xs text-brand-text-secondary">
          Enter your numbers. See what your sample program actually returns.
        </p>

        <div className="mt-5 rounded-xl border border-brand-border bg-brand-bg p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Active creators">
              <Input
                type="number"
                inputMode="numeric"
                value={s.creators}
                onChange={setField('creators')}
              />
            </Field>
            <Field label="Samples sent / month">
              <Input
                type="number"
                inputMode="numeric"
                value={s.samples}
                onChange={setField('samples')}
              />
            </Field>
            <Field label="Avg sample cost ($)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.01"
                value={s.sampleCost}
                onChange={setField('sampleCost')}
              />
            </Field>
            <Field label="% creators who post">
              <Input
                type="number"
                inputMode="numeric"
                value={s.postRate}
                onChange={setField('postRate')}
              />
            </Field>
            <Field label="Avg creator GMV / mo ($)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.01"
                value={s.gmv}
                onChange={setField('gmv')}
              />
            </Field>
            <Field label="Commission rate (%)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.1"
                value={s.commission}
                onChange={setField('commission')}
              />
            </Field>
          </div>

          <hr className="my-5 border-t border-brand-border" />

          <div className="grid grid-cols-3 gap-2 md:gap-3">
            <Result value={fmt(wasted)} label="Wasted sample spend" tone="coral" />
            <Result value={fmt(gross)} label="Gross from posts" />
            <Result value={fmt(net)} label="Net after costs" tone="leaf" />
          </div>

          <div className="mt-4 rounded-lg bg-brand-coral-light px-4 py-3 md:py-3.5">
            <p className="text-[13px] leading-relaxed text-brand-coral-dark">
              {wastePct}% of your samples went to creators who never posted. That&apos;s{' '}
              {fmt(wasted)}/mo in pure waste — money CollabHQ helps you recover.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] text-brand-text-muted">{label}</span>
      {children}
    </label>
  )
}

function Result({
  value,
  label,
  tone,
}: {
  value: string
  label: string
  tone?: 'coral' | 'leaf'
}) {
  const color =
    tone === 'coral'
      ? 'text-brand-coral'
      : tone === 'leaf'
        ? 'text-brand-leaf'
        : 'text-brand-text-primary'
  return (
    <div className="rounded-md border border-brand-border bg-brand-surface px-2 py-3 md:px-3 md:py-3.5 text-center">
      <div className={`text-[15px] md:text-lg font-bold tracking-tight ${color}`}>
        {value}
      </div>
      <div className="mt-1 text-[10px] md:text-[11px] text-brand-text-muted">
        {label}
      </div>
    </div>
  )
}
