import Link from 'next/link'
import { Section } from '@/components/layout/Section'

type Card = {
  href: string
  name: string
  description: string
  features: string[]
  price: string
  cta: string
}

const CARDS: Card[] = [
  {
    href: '/calculator',
    name: 'FeeScope',
    description:
      'See exactly what TikTok keeps — and what you actually take home on every order.',
    features: [
      'Per-order true profit — not estimated',
      'Real settlement data — what TikTok actually pays',
      'Fee change alerts — know when rates shift',
    ],
    price: '$19',
    cta: 'Calculate my true profit →',
  },
  {
    href: '/affiliate',
    name: 'CollabHQ',
    description:
      'Find creators, manage deals, track which affiliates actually drive orders — not estimates.',
    features: [
      'Pipeline management — not just a creator list',
      'Real order attribution per creator via API',
      'Outreach tracking — contacts, responses, deals',
    ],
    price: '$39',
    cta: 'Manage my creators →',
  },
]

export function ProductCards() {
  return (
    <Section variant="compact" width="wide" className="bg-brand-bg">
      <div className="grid gap-6 md:gap-8 md:grid-cols-2">
        {CARDS.map((card) => (
          <article
            key={card.name}
            className="rounded-xl border border-brand-border border-l-[3px] border-l-brand-accent bg-brand-surface p-6 md:p-8"
          >
            <h3 className="text-[20px] font-semibold text-brand-text-primary">
              {card.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-text-secondary">
              {card.description}
            </p>
            <ul className="mt-5 space-y-2.5">
              {card.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-brand-accent"
                  />
                  <span className="text-sm leading-snug text-brand-text-secondary">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="text-2xl font-bold tracking-tight text-brand-text-primary">
                {card.price}
              </span>
              <span className="text-sm text-brand-text-muted">/mo</span>
            </div>
            <Link
              href={card.href}
              className="mt-4 inline-block text-sm text-brand-accent hover:underline"
            >
              {card.cta}
            </Link>
          </article>
        ))}
      </div>
    </Section>
  )
}
