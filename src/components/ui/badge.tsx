import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-brand-border bg-brand-bg-secondary text-brand-text-secondary',
        accent:
          'border-transparent bg-brand-accent-light text-brand-text-primary',
        outline:
          'border-brand-border-strong bg-transparent text-brand-text-secondary',
        solid:
          'border-transparent bg-brand-accent text-brand-accent-text',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
