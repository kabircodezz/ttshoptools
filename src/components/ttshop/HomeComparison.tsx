import { Section } from '@/components/layout/Section'

const COMPETITORS = ['Kalodata', 'FastMoss', 'PostScout']

export function HomeComparison() {
  return (
    <Section variant="compact" width="wide" className="bg-brand-bg">
      <div className="rounded-2xl border border-brand-border bg-brand-surface overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th
                scope="col"
                className="border-b border-brand-border px-2 md:px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wide text-brand-text-muted"
              />
              {COMPETITORS.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="border-b border-brand-border px-2 md:px-4 py-3 text-center text-[11px] md:text-xs font-medium text-brand-text-secondary"
                >
                  {c}
                </th>
              ))}
              <th
                scope="col"
                className="border-b border-brand-border bg-brand-accent-light px-2 md:px-4 py-3 text-center text-[11px] md:text-xs font-semibold text-brand-accent"
              >
                TTShop Tools
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                className="px-2 md:px-4 py-3 text-left text-[11px] md:text-xs font-medium text-brand-text-primary"
              >
                Data source
              </th>
              {COMPETITORS.map((c) => (
                <td
                  key={c}
                  className="px-2 md:px-4 py-3 text-center text-[11px] md:text-xs text-brand-coral"
                >
                  Scraped
                </td>
              ))}
              <td className="bg-brand-accent-light px-2 md:px-4 py-3 text-center text-[11px] md:text-xs font-medium text-brand-accent">
                Official API ✓
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  )
}
