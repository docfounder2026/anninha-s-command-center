import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PLANS, openWhatsApp } from "@/lib/anninha";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="planos" className="bg-sand py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o nível de acompanhamento ideal para sua obra"
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90} className="h-full">
              <article
                className={cn(
                  "card-lift relative flex h-full flex-col rounded-3xl border bg-card p-8 shadow-soft",
                  plan.highlight
                    ? "border-primary bg-card ring-2 ring-primary/25 lg:-mt-4 lg:pb-10"
                    : "border-border",
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                    <Star className="size-3.5" aria-hidden="true" />
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>
                <p className="mt-6 font-display text-3xl font-semibold text-primary">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{plan.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant={plan.highlight ? "default" : "outline"}
                  className="mt-8 h-13 w-full text-base"
                  onClick={() =>
                    openWhatsApp(
                      `Olá, Anninha! Conheci a ANNINHA CONSTRUÇÕES pelo site e tenho interesse no plano ${plan.name}.`,
                    )
                  }
                >
                  {plan.cta}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
