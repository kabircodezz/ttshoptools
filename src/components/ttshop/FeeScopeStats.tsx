const STATS = [
  { value: '35–55%', label: 'actual cost of sale' },
  { value: '11', label: 'fee types tracked' },
  { value: '2×', label: 'what sellers estimate vs reality' },
]

export function FeeScopeStats() {
  return (
    <section className="w-full border-y border-brand-border bg-brand-surface">
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-3">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 py-5 md:py-6 text-center ${
              i === 2 ? 'col-span-2 md:col-span-1' : ''
            } ${i > 0 ? 'md:border-l border-brand-border' : ''} ${
              i === 1 ? 'border-l border-brand-border md:border-l' : ''
            }`}
          >
            <div className="text-2xl md:text-3xl font-bold tracking-tight text-brand-accent">
              {s.value}
            </div>
            <div className="mt-1 text-[11px] text-brand-text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
