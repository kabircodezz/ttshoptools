'use client'

import * as React from 'react'
import { Section } from '@/components/layout/Section'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import type { Product } from '@/lib/site'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export function EmailCapture({
  product,
  title,
}: {
  product: Product
  title: string
}) {
  const [firstName, setFirstName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<Status>('idle')
  const [message, setMessage] = React.useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setMessage('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, product }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setStatus('error')
        setMessage(data?.error || 'Something went wrong. Try again.')
        return
      }
      setStatus('ok')
      setMessage("You're on the list. We'll notify you at launch.")
      setFirstName('')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Network error. Try again.')
    }
  }

  return (
    <Section variant="compact" width="text" className="bg-brand-bg border-t border-brand-border">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-base md:text-lg font-semibold text-brand-text-primary">
          {title}
        </h2>
        <form onSubmit={onSubmit} className="mt-5 flex flex-col sm:flex-row gap-2.5">
          <Input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="sm:flex-1"
            aria-label="First name"
          />
          <Input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sm:flex-1"
            aria-label="Email address"
          />
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={status === 'loading'}
            className="sm:w-auto w-full"
          >
            {status === 'loading' ? 'Submitting…' : 'Notify me'}
          </Button>
        </form>
        {message ? (
          <p
            className={`mt-3 text-xs ${
              status === 'error' ? 'text-brand-coral' : 'text-brand-leaf'
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </Section>
  )
}
