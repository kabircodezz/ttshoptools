import * as React from 'react'
import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { brand } from '@/brand'
import { cn } from '@/lib/utils'

export interface TrustItem {
  icon: React.ReactNode
  text: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterProps {
  siteName?: string
  trustItems?: TrustItem[]
  navLinks?: FooterLink[]
  legal?: React.ReactNode
  className?: string
}

export function Footer({
  siteName = brand.siteName,
  trustItems = [],
  navLinks,
  legal,
  className,
}: FooterProps) {
  return (
    <Section
      as="footer"
      variant="compact"
      width="wide"
      className={cn('bg-brand-bg border-t border-brand-border', className)}
    >
      <div className="flex flex-col gap-8 items-center text-center">
        {navLinks && navLinks.length > 0 ? (
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}

        {trustItems.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-sm text-brand-text-secondary"
              >
                <span className="text-brand-text-muted">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="text-xs text-brand-text-muted">
          {legal ?? `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`}
        </div>
      </div>
    </Section>
  )
}
