import { Section } from '@/components/layout/Section'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export type FAQItem = { question: string; answer: string }

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <Section variant="standard" width="text" className="bg-brand-bg border-t border-brand-border">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-brand-text-primary">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {items.map((it, i) => (
            <AccordionItem key={it.question} value={`item-${i}`}>
              <AccordionTrigger>{it.question}</AccordionTrigger>
              <AccordionContent>{it.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
