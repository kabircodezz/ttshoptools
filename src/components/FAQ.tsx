import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="border-t border-[0.5px] border-cream-border bg-cream-bg px-6 py-7">
      <h3 className="mb-4 text-center text-[16px] font-semibold text-ink-bg">
        Frequently asked questions
      </h3>
      <div className="mx-auto max-w-[640px]">
        <Accordion type="single" collapsible>
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{it.q}</AccordionTrigger>
              <AccordionContent>{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
