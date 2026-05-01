'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Wordmark } from './Wordmark'

const LINKS = [
  { label: 'FeeScope', href: '/calculator' },
  { label: 'CollabHQ', href: '/affiliate' },
]

export function SiteNav({ current }: { current?: 'feescope' | 'collabhq' | 'home' | 'thank-you' }) {
  const [open, setOpen] = React.useState(false)

  function isActive(href: string) {
    return (
      (href === '/calculator' && current === 'feescope') ||
      (href === '/affiliate' && current === 'collabhq')
    )
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-border bg-brand-bg/85 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/70">
      <div className="mx-auto flex h-14 md:h-16 max-w-6xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Wordmark />

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-[13px] transition-colors',
                isActive(link.href)
                  ? 'text-brand-text-primary font-medium'
                  : 'text-brand-text-secondary hover:text-brand-text-primary',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-brand-text-primary hover:bg-brand-bg-secondary transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-brand-border bg-brand-bg">
          <nav className="flex flex-col px-4 py-2">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full px-2 py-3 text-base text-brand-text-primary border-b border-brand-border last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
