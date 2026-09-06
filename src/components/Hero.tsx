import { ArrowRight, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { openWhatsApp } from "@/lib/anninha";
import heroImage from "@/assets/Heros-acompanha-obra.png";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-sand">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Gestão de Compras + Acompanhamento
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Sua obra sob <span className="text-primary">controle</span>, mesmo quando você não pode
            estar nela.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A ANNINHA CONSTRUÇÕES cuida das compras, fornecedores, entregas e acompanhamento
            operacional da sua obra para você ganhar tempo,{" "}
            <strong className="font-semibold text-foreground">organização</strong> e{" "}
            <strong className="font-semibold text-foreground">tranquilidade</strong>, com mais{" "}
            <strong className="font-semibold text-foreground">economia</strong> nas decisões de
            compra.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-14 text-base"
              onClick={() =>
                openWhatsApp(
                  "Olá, Anninha! Conheci a ANNINHA CONSTRUÇÕES pelo site e quero uma avaliação da minha obra.",
                )
              }
            >
              Quero uma avaliação da minha obra
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 text-base" asChild>
              <a href="#planos">Conhecer os planos</a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Você decide. A Anninha organiza e acompanha.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-card shadow-lift">
            <img
              src={heroImage}
              alt="Acompanhamento de obra pela equipe da ANNINHA CONSTRUÇÕES"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
          <div className="relative z-10 mx-4 -mt-10 rounded-2xl border border-border bg-card p-4 shadow-lift sm:mx-8 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <ClipboardList className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-foreground sm:text-base">
                  Gestão de Compras + Acompanhamento de Obras
                </p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Mais controle. Melhores compras. Menos preocupação.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
