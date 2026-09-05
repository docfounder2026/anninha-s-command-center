import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { openWhatsApp } from "@/lib/anninha";

const STEPS = [
  "Você conta sobre sua obra",
  "Entendemos sua necessidade",
  "Indicamos o melhor plano",
  "Organizamos compras e acompanhamento",
  "Você recebe informações e aprovações",
  "Sua obra segue com mais controle",
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Como funciona" title="Simples para você. Organizado pela Anninha." />

        <ol className="mx-auto mt-14 max-w-3xl">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 60} className="relative flex gap-5 pb-8 last:pb-0">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[1.375rem] top-12 h-[calc(100%-3rem)] w-px bg-border"
                />
              )}
              <span className="relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card font-display text-base font-semibold text-primary shadow-soft">
                {i + 1}
              </span>
              <p className="pt-2.5 font-display text-lg font-semibold text-foreground sm:text-xl">
                {step}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="h-14 text-base"
            onClick={() =>
              openWhatsApp(
                "Olá, Anninha! Conheci a ANNINHA CONSTRUÇÕES pelo site e quero começar.",
              )
            }
          >
            Quero começar
            <ArrowRight aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
