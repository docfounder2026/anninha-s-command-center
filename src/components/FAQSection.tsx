import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FAQ_ITEMS } from "@/lib/anninha";

export function FAQSection() {
  return (
    <section id="faq" className="bg-sand py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-soft transition-colors duration-300 last:border-b hover:border-primary/30"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
