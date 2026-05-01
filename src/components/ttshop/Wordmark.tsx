import Link from 'next/link'

export function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span aria-hidden className="block h-[11px] w-[18px] rounded-[2px] bg-brand-accent" />
      <span className="text-[13px] font-medium tracking-tight text-brand-text-primary">
        TTShop Tools
      </span>
    </Link>
  )
}
