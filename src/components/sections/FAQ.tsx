import * as React from 'react'
import { Section } from '@/components/layout/Section'
import { Heading2, BodyLarge } from '@/components/layout/Typography'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export interface FAQItem {
  question: string
  answer: React.ReactNode
}

export interface FAQProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  items: FAQItem[]
  className?: string
}

export function FAQ({
  title = 'Frequently asked questions',
  subtitle,
  items,
  className,
}: FAQProps) {
  return (
    <Section variant="standard" width="text" className={cn('bg-brand-bg', className)}>
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10 md:mb-12">
          <Heading2 className="text-brand-text-primary">{title}</Heading2>
          {subtitle ? (
            <BodyLarge className="mt-3 text-brand-text-secondary">{subtitle}</BodyLarge>
          ) : null}
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
