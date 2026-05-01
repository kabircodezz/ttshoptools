'use client'

import * as React from 'react'
import { Section } from '@/components/layout/Section'
import { Heading2, BodyLarge, Body } from '@/components/layout/Typography'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface EmailCaptureProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  placeholder?: string
  buttonLabel?: string
  fineprint?: React.ReactNode
  onSubmit?: (email: string) => void | Promise<void>
  className?: string
}

export function EmailCapture({
  title,
  subtitle,
  placeholder = 'you@company.com',
  buttonLabel = 'Get access',
  fineprint,
  onSubmit,
  className,
}: EmailCaptureProps) {
  const [email, setEmail] = React.useState('')
  const [submitting, setSubmitting] = React.useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!onSubmit) return
    try {
      setSubmitting(true)
      await onSubmit(email)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section variant="standard" width="text" className={cn('bg-brand-bg', className)}>
      <div className="mx-auto max-w-md text-center">
        <Heading2 className="text-brand-text-primary">{title}</Heading2>
        {subtitle ? (
          <BodyLarge className="mt-3 text-brand-text-secondary">{subtitle}</BodyLarge>
        ) : null}
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-3"
        >
          <Input
            type="email"
            required
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            className="sm:flex-1"
          />
          <Button type="submit" disabled={submitting} size="md">
            {submitting ? 'Submitting…' : buttonLabel}
          </Button>
        </form>
        {fineprint ? (
          <Body className="mt-3 text-brand-text-muted text-xs">{fineprint}</Body>
        ) : null}
      </div>
    </Section>
  )
}
