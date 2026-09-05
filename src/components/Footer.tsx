import { whatsappLink } from "@/lib/anninha";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-sand py-14">
      <div className="container-page grid gap-10 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-foreground">
            ANNINHA CONSTRUÇÕES
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Gestão de Compras e Acompanhamento de Obras
          </p>
          <p className="mt-4 font-display text-base text-primary">
            Mais controle. Melhores compras. Menos preocupação.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <ul className="grid gap-2.5 text-sm">
            <li>
              <a href="#servicos" className="text-muted-foreground hover:text-primary">
                Serviços
              </a>
            </li>
            <li>
              <a href="#planos" className="text-muted-foreground hover:text-primary">
                Planos
              </a>
            </li>
            <li>
              <a href="#faq" className="text-muted-foreground hover:text-primary">
                FAQ
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container-page mt-10 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          © {year} ANNINHA CONSTRUÇÕES. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-xs text-muted-foreground/80">
          Serviços de acompanhamento operacional não substituem responsabilidade técnica de
          profissionais legalmente habilitados.
        </p>
      </div>
    </footer>
  );
}
