import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { openWhatsApp } from "@/lib/anninha";

export function PartnersSection() {
  return (
    <section id="parcerias" className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Handshake className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-2xl font-semibold text-foreground sm:text-3xl">
            Também trabalhamos em parceria com profissionais da construção.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Arquitetos, engenheiros, designers e profissionais da construção podem contar com a
            ANNINHA como apoio operacional em cotações, fornecedores e compras.
          </p>
          <Button
            size="lg"
            className="mt-8 h-14 text-base"
            onClick={() =>
              openWhatsApp(
                "Olá, Anninha! Sou profissional da construção e quero conversar sobre parceria com a ANNINHA CONSTRUÇÕES.",
              )
            }
          >
            Quero conversar sobre parceria
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
