import { Search, PackageCheck, Camera } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const SERVICES = [
  {
    icon: Search,
    title: "Cotação e Negociação",
    text: "Pesquisamos fornecedores, comparamos propostas, prazos e condições e buscamos melhores oportunidades de compra.",
  },
  {
    icon: PackageCheck,
    title: "Gestão de Compras",
    text: "Organizamos pedidos, fornecedores, entregas, valores e próximas necessidades da obra.",
  },
  {
    icon: Camera,
    title: "Acompanhamento de Obra",
    text: "Realizamos visitas programadas, registros fotográficos, acompanhamento de pendências e organização das informações.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-sand py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Serviços"
          title="Você continua no controle. A Anninha cuida da operação."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <article className="card-lift flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
