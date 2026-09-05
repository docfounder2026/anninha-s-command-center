import {
  Activity,
  ShoppingBag,
  FileSearch,
  CalendarClock,
  AlertCircle,
  Images,
  Flag,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  { icon: Activity, label: "Andamento" },
  { icon: ShoppingBag, label: "Compras realizadas" },
  { icon: FileSearch, label: "Cotações" },
  { icon: CalendarClock, label: "Próximas necessidades" },
  { icon: AlertCircle, label: "Pendências" },
  { icon: Images, label: "Fotos" },
  { icon: Flag, label: "Pontos de atenção" },
];

export function ReportPreview() {
  return (
    <section id="relatorio" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Relatório ANNINHA"
          title="Você sabe o que está acontecendo na sua obra."
          description="Dependendo do plano contratado, você recebe informações organizadas sobre o andamento da obra e das compras."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                <div>
                  <p className="font-display text-base font-semibold text-foreground">
                    Relatório da obra · Semana 14
                  </p>
                  <p className="text-xs text-muted-foreground">Residência · Acabamento</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Atualizado
                </span>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { k: "Andamento", v: "62%" },
                  { k: "Compras no mês", v: "18" },
                  { k: "Cotações abertas", v: "4" },
                  { k: "Entregas previstas", v: "3" },
                  { k: "Pendências", v: "2" },
                  { k: "Pontos de atenção", v: "1" },
                ].map((stat) => (
                  <div key={stat.k} className="rounded-xl bg-secondary p-4">
                    <dt className="text-xs text-muted-foreground">{stat.k}</dt>
                    <dd className="mt-1 font-display text-xl font-semibold text-foreground">
                      {stat.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6">
                <p className="text-xs font-medium text-muted-foreground">Andamento geral</p>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[62%] rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-soft"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                    <item.icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
