import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, openWhatsApp } from "@/lib/anninha";
import { cn } from "@/lib/utils";
import anninhaLogo from "@/assets/anninha-construcoes-logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md shadow-soft"
          : "border-transparent bg-background",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="ANNINHA CONSTRUÇÕES">
          <img src={anninhaLogo} alt="ANNINHA CONSTRUÇÕES" className="h-8 w-auto sm:h-10" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-underline text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button onClick={() => openWhatsApp()} aria-label="Falar com a Anninha no WhatsApp">
            <MessageCircle aria-hidden="true" />
            Falar com a Anninha
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-transform active:scale-90 lg:hidden"
        >
          <span
            className={cn(
              "grid transition-transform duration-200",
              open ? "rotate-90" : "rotate-0",
            )}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </span>
        </button>
      </div>

      <div
        inert={!open}
        aria-hidden={!open}
        className={cn(
          "grid overflow-hidden border-t border-border bg-background transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-t-transparent opacity-0",
        )}
      >
        <nav aria-label="Navegação mobile" className="container-page flex flex-col overflow-hidden py-4">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={cn(
                "rounded-lg px-2 py-3 text-base font-medium text-foreground transition-all duration-300 hover:bg-secondary hover:pl-4",
                open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0",
              )}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="lg"
            className="mt-3 w-full"
            onClick={() => {
              setOpen(false);
              openWhatsApp();
            }}
          >
            <MessageCircle aria-hidden="true" />
            Falar com a Anninha
          </Button>
        </nav>
      </div>
    </header>
  );
}
