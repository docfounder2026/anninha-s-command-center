import { Clock, Scale, Truck, ShoppingCart, LayoutList, Eye, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { openWhatsApp } from "@/lib/anninha";

const PROBLEMS = [
  { icon: Clock, label: "Falta de tempo" },
  { icon: Scale, label: "Preços difíceis de comparar" },
  { icon: Truck, label: "Fornecedores atrasados" },
  { icon: ShoppingCart, label: "Compras de última hora" },
  { icon: LayoutList, label: "Falta de organização" },
  { icon: Eye, label: "Dificuldade para acompanhar a obra" },
];

export function ProblemSection() {
  return (
    <section id="desafios" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="O desafio"
          title="Uma obra pode facilmente deixar o dono esgotado."
          description="Pesquisar fornecedores, comparar preços, negociar, acompanhar pedidos, resolver atrasos e ainda acompanhar o andamento da obra exige tempo e atenção."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem, i) => (
            <Reveal as="li" key={problem.label} delay={i * 70}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <problem.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-foreground">
                  {problem.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl font-display text-xl font-semibold text-foreground sm:text-2xl">
            A ANNINHA entra justamente onde a obra começa a consumir o seu tempo.
          </p>
          <Button size="lg" className="h-14 text-base" onClick={() => openWhatsApp()}>
            <MessageCircle aria-hidden="true" />
            Falar com a Anninha
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
