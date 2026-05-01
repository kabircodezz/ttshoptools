'use client'

import * as React from 'react'
import { Section } from '@/components/layout/Section'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

type State = {
  category: string
  status: string
  price: string
  cogs: string
  ref: string
  proc: string
  ship: string
  aff: string
  ads: string
  ret: string
}

const initial: State = {
  category: 'beauty',
  status: 'established',
  price: '29.99',
  cogs: '8.00',
  ref: '6',
  proc: '2.9',
  ship: '4.50',
  aff: '20',
  ads: '2.80',
  ret: '8',
}

const CATEGORY_OPTIONS = [
  { value: 'beauty', label: 'Beauty & Personal Care' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'home', label: 'Home & Living' },
]

const STATUS_OPTIONS = [
  { value: 'established', label: 'Established seller' },
  { value: 'new', label: 'New seller' },
]

function num(v: string): number {
  const x = parseFloat(v)
  return Number.isFinite(x) ? x : 0
}

export function FeeScopeCalculator() {
  const [s, setS] = React.useState<State>(initial)
  const setField =
    (key: keyof State) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setS((prev) => ({ ...prev, [key]: e.target.value }))
  const setSelect = (key: keyof State) => (v: string) =>
    setS((prev) => ({ ...prev, [key]: v }))

  const { fees, profit, pct } = React.useMemo(() => {
    const price = num(s.price)
    const cogs = num(s.cogs)
    const ref = num(s.ref)
    const proc = num(s.proc)
    const ship = num(s.ship)
    const aff = num(s.aff)
    const ads = num(s.ads)
    const ret = num(s.ret)
    const fees =
      (price * ref) / 100 +
      (price * proc) / 100 +
      ship +
      (price * aff) / 100 +
      ads +
      cogs +
      ((price * ret) / 100) * 0.5
    const profit = price - fees
    const pct = price > 0 ? Math.round((fees / price) * 100) : 0
    return { fees, profit, pct }
  }, [s])

  const rev = num(s.price)
  const keepPct = Math.max(0, 100 - pct)

  return (
    <Section variant="standard" width="wide" className="bg-brand-bg">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-brand-text-primary">
            Per-order profit calculator
          </span>
          <Badge variant="default">Free · No limits</Badge>
        </div>
        <p className="mt-1 text-xs text-brand-text-secondary">
          Enter your numbers. See what you actually keep.
        </p>

        <div className="mt-5 rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Category">
              <Select value={s.category} onValueChange={setSelect('category')}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORY_OPTIONS.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Seller status">
              <Select value={s.status} onValueChange={setSelect('status')}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STATUS_OPTIONS.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Selling price ($)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.01"
                value={s.price}
                onChange={setField('price')}
              />
            </Field>
            <Field label="Product cost / COGS ($)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.01"
                value={s.cogs}
                onChange={setField('cogs')}
              />
            </Field>
            <Field label="Referral fee (%)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.1"
                value={s.ref}
                onChange={setField('ref')}
              />
            </Field>
            <Field label="Payment processing (%)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.1"
                value={s.proc}
                onChange={setField('proc')}
              />
            </Field>
            <Field label="Shipping cost ($)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.01"
                value={s.ship}
                onChange={setField('ship')}
              />
            </Field>
            <Field label="Affiliate commission (%)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.1"
                value={s.aff}
                onChange={setField('aff')}
              />
            </Field>
            <Field label="Ad spend / order ($)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.01"
                value={s.ads}
                onChange={setField('ads')}
              />
            </Field>
            <Field label="Returns (%)">
              <Input
                type="number"
                inputMode="decimal"
                step="0.1"
                value={s.ret}
                onChange={setField('ret')}
              />
            </Field>
          </div>

          <hr className="my-5 border-t border-brand-border" />

          <div className="grid grid-cols-3 gap-2 md:gap-3">
            <Result value={`$${rev.toFixed(2)}`} label="Gross revenue" />
            <Result
              value={`-$${fees.toFixed(2)}`}
              label="Total fees & costs"
              tone="coral"
            />
            <Result
              value={`$${profit.toFixed(2)}`}
              label="Net profit per order"
              tone="amber"
            />
          </div>

          <div className="mt-4 rounded-lg bg-brand-accent-light px-4 py-3 md:py-3.5">
            <p className="text-[13px] leading-relaxed text-brand-accent-deep">
              {pct}% of your selling price goes to fees and costs. You keep {keepPct}%.
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
  tone?: 'amber' | 'coral'
}) {
  const color =
    tone === 'coral'
      ? 'text-brand-coral'
      : tone === 'amber'
        ? 'text-brand-accent'
        : 'text-brand-text-primary'
  return (
    <div className="rounded-md bg-brand-bg px-2 py-3 md:px-3 md:py-3.5 text-center">
      <div className={`text-[15px] md:text-xl font-bold tracking-tight ${color}`}>
        {value}
      </div>
      <div className="mt-1 text-[10px] md:text-[11px] text-brand-text-muted">
        {label}
      </div>
    </div>
  )
}
