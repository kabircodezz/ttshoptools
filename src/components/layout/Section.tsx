import * as React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'spacious' | 'standard' | 'compact'
type Width = 'text' | 'wide' | 'full'

const variantClasses: Record<Variant, string> = {
  spacious: 'py-24 md:py-32',
  standard: 'py-16 md:py-24',
  compact: 'py-10 md:py-16',
}

const widthClasses: Record<Width, string> = {
  text: 'max-w-4xl mx-auto',
  wide: 'max-w-6xl mx-auto',
  full: 'w-full',
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant
  width?: Width
  innerClassName?: string
  as?: 'section' | 'header' | 'footer' | 'div'
}

export function Section({
  variant = 'standard',
  width = 'wide',
  className,
  innerClassName,
  as: As = 'section',
  children,
  ...rest
}: SectionProps) {
  return (
    <As className={cn('w-full', className)} {...rest}>
      <div
        className={cn(
          'mx-auto px-4 md:px-6 lg:px-8',
          widthClasses[width],
          variantClasses[variant],
          innerClassName,
        )}
      >
        {children}
      </div>
    </As>
  )
}
