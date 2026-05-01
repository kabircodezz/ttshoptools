import { Check } from 'lucide-react'

const ITEMS = [
  'Official TikTok Shop Partner API',
  'Built for US sellers in 2026',
  'Founding member pricing — locked for life',
]

export function FooterTrust() {
  return (
    <footer className="w-full border-t border-brand-border bg-brand-bg">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <ul className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3">
          {ITEMS.map((line) => (
            <li
              key={line}
              className="flex items-center gap-2 text-xs text-brand-text-muted"
            >
              <span
                aria-hidden
                className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-leaf-light"
              >
                <Check className="h-2.5 w-2.5 text-brand-leaf" strokeWidth={3} />
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
