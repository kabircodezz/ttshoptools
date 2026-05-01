import { Section } from '@/components/layout/Section'
import { Heading2 } from '@/components/layout/Typography'

const STAGES = [
  { label: 'Invited', on: false },
  { label: 'Accepted', on: false },
  { label: 'Sample sent', on: true },
  { label: 'Posted?', on: true },
  { label: 'Sales?', on: true },
]

export function WorkflowPipeline() {
  return (
    <Section variant="standard" width="wide" className="bg-brand-bg border-t border-brand-border">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-medium uppercase tracking-wider text-brand-coral">
          The creator workflow
        </p>
        <Heading2 className="mt-3 text-brand-text-primary">
          Seller Center tracks the first two stages.
          <br />
          <span className="text-brand-coral">
            Everything after is yours to figure out.
          </span>
        </Heading2>
      </div>

      <div className="mt-8 overflow-x-auto pb-1">
        <div className="flex items-stretch min-w-max md:justify-center">
          {STAGES.map((stage, i) => (
            <div key={stage.label} className="flex items-center">
              <div
                className={`flex min-w-[70px] sm:min-w-[110px] items-center justify-center border px-3 py-3 text-center text-[11px] sm:text-xs ${
                  stage.on
                    ? 'border-brand-accent-border bg-brand-accent-light font-medium text-brand-accent-dark'
                    : 'border-brand-border bg-brand-surface text-brand-text-muted'
                } ${i === 0 ? 'rounded-l-md' : ''} ${
                  i === STAGES.length - 1 ? 'rounded-r-md' : ''
                }`}
              >
                {stage.label}
              </div>
              {i < STAGES.length - 1 ? (
                <span
                  aria-hidden
                  className="px-1 text-xs text-brand-text-muted"
                >
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-brand-coral">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-coral" />
        CollabHQ tracks the stages that actually determine ROI
      </div>
    </Section>
  )
}
