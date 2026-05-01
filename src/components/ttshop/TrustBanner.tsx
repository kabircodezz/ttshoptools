export function TrustBanner() {
  return (
    <section className="w-full bg-brand-accent-light border-y border-brand-border">
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 py-5 md:py-6">
        <p className="text-sm leading-relaxed text-brand-accent-deep">
          Every other tool scrapes TikTok. We don&apos;t. Your numbers come directly from
          TikTok&apos;s official Partner API —{' '}
          <strong className="font-medium text-brand-text-primary">
            the same system TikTok uses internally.
          </strong>{' '}
          Exact fees, real attribution, decisions based on truth.
        </p>
      </div>
    </section>
  )
}
