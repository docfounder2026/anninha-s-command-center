import { TrendingDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const ROWS = [
  { label: "Primeiro orçamento", value: "R$ 9.800" },
  { label: "Valor após novas cotações", value: "R$ 8.750" },
];

export function SavingsExample() {
  return (
    <section id="economia" className="bg-sand py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Economia"
          title="Comprar melhor também faz diferença no orçamento."
        />

        <Reveal className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <table className="w-full text-left">
            <caption className="sr-only">Exemplo ilustrativo de comparação de cotações</caption>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th scope="row" className="px-6 py-5 text-sm font-medium text-muted-foreground">
                    {row.label}
                  </th>
                  <td className="px-6 py-5 text-right font-display text-xl font-semibold text-foreground">
                    {row.value}
                  </td>
                </tr>
              ))}
              <tr className="bg-accent/60">
                <th
                  scope="row"
                  className="px-6 py-5 text-sm font-semibold text-accent-foreground"
                >
                  <span className="inline-flex items-center gap-2">
                    <TrendingDown className="size-4" aria-hidden="true" />
                    Economia identificada
                  </span>
                </th>
                <td className="px-6 py-5 text-right font-display text-2xl font-semibold text-primary">
                  R$ 1.050
                </td>
              </tr>
            </tbody>
          </table>
        </Reveal>

        <Reveal className="mx-auto mt-6 max-w-2xl">
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Os valores são apenas ilustrativos. A ANNINHA não promete economia fixa ou menor preço
            garantido. O objetivo é ampliar a comparação e melhorar a qualidade das decisões de
            compra.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
