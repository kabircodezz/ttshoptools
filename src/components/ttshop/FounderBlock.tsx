'use client'

import * as React from 'react'
import { Check } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import type { Product } from '@/lib/site'

type FounderBlockProps = {
  product: Product
  founderPrice: string
  regularPrice: string
  savingsYear: string
  savingsThreeYear: string
  description: string
}

export function FounderBlock({
  product,
  founderPrice,
  regularPrice,
  savingsYear,
  savingsThreeYear,
  description,
}: FounderBlockProps) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const isCoral = product === 'collabhq'
  const accentText = isCoral ? 'text-brand-coral' : 'text-brand-accent'
  const buttonBg = isCoral
    ? 'bg-brand-coral hover:bg-brand-coral-dark'
    : 'bg-brand-accent hover:bg-brand-accent-dark'

  async function onCheckout() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product }),
      })
      const data = (await res.json().catch(() => ({}))) as {
        url?: string
        error?: string
      }
      if (!res.ok || !data.url) {
        setError(data?.error || 'Could not start checkout. Try again.')
        setLoading(false)
        return
      }
      window.location.assign(data.url)
    } catch {
      setError('Network error. Try again.')
      setLoading(false)
    }
  }

  return (
    <Section variant="compact" width="wide" className="bg-brand-bg">
      <div className="mx-auto max-w-sm rounded-2xl bg-brand-surface-dark p-7 md:p-8 text-center">
        <p
          className={`text-[10px] font-medium uppercase tracking-[0.1em] ${accentText}`}
        >
          Founder pricing · Locked for life
        </p>
        <h3 className="mt-2 text-[20px] md:text-[22px] font-bold text-brand-text-on-dark">
          Reserve your spot for $1
        </h3>

        <div className="mt-4 flex items-baseline justify-center gap-2">
          <span className={`text-4xl font-bold ${accentText}`}>{founderPrice}</span>
          <span className="text-base text-brand-text-on-dark/40 line-through">
            {regularPrice}
          </span>
          <span className="text-xs text-brand-text-on-dark/60">/mo forever</span>
        </div>

        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          <span
            className={`rounded-md bg-brand-surface-darker px-2 py-1 text-[11px] ${accentText}`}
          >
            Save {savingsYear}
          </span>
          <span
            className={`rounded-md bg-brand-surface-darker px-2 py-1 text-[11px] ${accentText}`}
          >
            {savingsThreeYear}
          </span>
        </div>

        <p className="mt-3 text-[13px] text-brand-text-on-dark/70">{description}</p>

        <ul className="mt-5 mx-auto flex flex-col gap-2 text-left">
          {[
            'Cancel anytime before launch — $1 fully refunded',
            '$1 applied to your first month when we launch',
            'Priority access — founders get in before public launch',
          ].map((line) => (
            <li
              key={line}
              className="flex items-start gap-2 text-xs text-brand-text-on-dark/85"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-leaf-dark"
              >
                <Check className="h-2.5 w-2.5 text-brand-leaf" strokeWidth={3} />
              </span>
              {line}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onCheckout}
          disabled={loading}
          className={`mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold text-white transition-colors disabled:opacity-60 ${buttonBg}`}
        >
          {loading ? 'Starting checkout…' : 'Reserve my spot for $1 →'}
        </button>

        <p className="mt-3 text-[11px] text-brand-text-on-dark/45">
          First 100 founders only · Secured by Stripe
        </p>
        {error ? (
          <p className="mt-2 text-[11px] text-brand-coral">{error}</p>
        ) : null}
      </div>
    </Section>
  )
}
