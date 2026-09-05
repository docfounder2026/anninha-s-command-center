import { Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  "está construindo",
  "está reformando",
  "trabalha o dia todo",
  "mora longe da obra",
  "não gosta de negociar",
  "não conhece fornecedores",
  "quer acompanhar melhor os gastos",
  "quer reduzir a sobrecarga da obra",
];

export function TargetAudienceSection() {
  return (
    <section id="para-quem" className="bg-sand py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Para quem é" title="A ANNINHA pode fazer sentido para você se…" />

        <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 50}>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-soft">
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-foreground sm:text-base">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
