'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { brand } from '@/brand'
import { Button } from '@/components/ui/button'

export interface NavLink {
  label: string
  href: string
}

export interface NavProps {
  siteName?: string
  links?: NavLink[]
  cta?: { label: string; href: string }
}

const defaultLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Nav({
  siteName = brand.siteName,
  links = defaultLinks,
  cta = { label: 'Get started', href: '#cta' },
}: NavProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b border-brand-border',
        'bg-brand-bg/80 backdrop-blur supports-[backdrop-filter]:bg-brand-bg/70',
      )}
    >
      <div className="mx-auto flex h-14 md:h-16 max-w-6xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="block h-7 w-7 rounded-md bg-brand-accent"
          />
          <span className="text-sm md:text-base font-semibold tracking-tight text-brand-text-primary">
            {siteName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" variant="primary">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>

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

      {open && (
        <div className="md:hidden border-t border-brand-border bg-brand-bg">
          <nav className="flex flex-col px-4 py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full px-2 py-3 text-base text-brand-text-primary hover:text-brand-accent border-b border-brand-border last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="py-3">
              <Button asChild className="w-full" variant="primary">
                <Link href={cta.href} onClick={() => setOpen(false)}>
                  {cta.label}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
