import { Clock, Lightbulb, FolderKanban, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { openWhatsApp } from "@/lib/anninha";

const BENEFITS = [
  {
    icon: Clock,
    title: "Tempo",
    text: "Você não precisa passar horas resolvendo compras e fornecedores.",
  },
  {
    icon: Lightbulb,
    title: "Melhores decisões",
    text: "Comparamos informações antes de você aprovar.",
  },
  {
    icon: FolderKanban,
    title: "Organização",
    text: "Compras, fornecedores e pendências ficam mais estruturados.",
  },
  {
    icon: MapPin,
    title: "Presença",
    text: "Você pode acompanhar melhor sua obra mesmo sem estar nela todos os dias.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Benefícios" title="Por que contar com a ANNINHA?" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <article className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <benefit.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button size="lg" className="h-14 text-base" onClick={() => openWhatsApp()}>
            <MessageCircle aria-hidden="true" />
            Falar com a Anninha
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
