import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { openWhatsApp } from "@/lib/anninha";

export function FinalCTA() {
  return (
    <section id="contato" className="bg-primary py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl">
            Sua obra não precisa consumir todo o seu tempo.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Conte para a Anninha onde está sua obra, em qual etapa ela está e qual é sua maior
            dificuldade hoje.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-9 h-16 w-full px-8 text-base font-semibold sm:w-auto sm:text-lg"
            onClick={() =>
              openWhatsApp(
                "Olá, Anninha! Conheci a ANNINHA CONSTRUÇÕES pelo site e quero uma avaliação da minha obra.",
              )
            }
          >
            <MessageCircle aria-hidden="true" />
            Quero uma avaliação da minha obra
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/80">Fale diretamente pelo WhatsApp.</p>
        </Reveal>
      </div>
    </section>
  );
}
