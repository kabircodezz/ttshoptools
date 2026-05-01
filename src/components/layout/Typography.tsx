import * as React from 'react'
import { cn } from '@/lib/utils'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>
type TextProps = React.HTMLAttributes<HTMLParagraphElement>
type SpanProps = React.HTMLAttributes<HTMLSpanElement>

export function Heading1({ className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight',
        className,
      )}
      {...props}
    />
  )
}

export function Heading2({ className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn('text-3xl md:text-4xl font-bold tracking-tight leading-tight', className)}
      {...props}
    />
  )
}

export function Heading3({ className, ...props }: HeadingProps) {
  return (
    <h3
      className={cn('text-xl md:text-2xl font-semibold leading-snug', className)}
      {...props}
    />
  )
}

export function BodyLarge({ className, ...props }: TextProps) {
  return <p className={cn('text-base md:text-lg leading-relaxed', className)} {...props} />
}

export function Body({ className, ...props }: TextProps) {
  return <p className={cn('text-sm md:text-base leading-relaxed', className)} {...props} />
}

export function Label({ className, ...props }: SpanProps) {
  return (
    <span
      className={cn('text-xs font-medium tracking-wide uppercase', className)}
      {...props}
    />
  )
}
