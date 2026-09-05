import { ShieldCheck, GitCompareArrows, ReceiptText } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  { icon: ShieldCheck, label: "Aprovação antes da compra" },
  { icon: GitCompareArrows, label: "Comparação de fornecedores" },
  { icon: ReceiptText, label: "Registro dos valores" },
];

export function TransparencySection() {
  return (
    <section id="transparencia" className="bg-primary-deep py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          tone="inverted"
          eyebrow="Transparência"
          title="Transparência em primeiro lugar."
          description="As compras são organizadas com aprovação do cliente e, preferencialmente, o pagamento é realizado diretamente ao fornecedor."
        />

        <Reveal className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center">
          <p className="font-display text-lg font-semibold text-gold sm:text-xl">
            A Anninha representa o interesse do proprietário da obra.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 80}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl border border-primary-foreground/15 p-6 text-center">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="font-medium text-primary-foreground">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
