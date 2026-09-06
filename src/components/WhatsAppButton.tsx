import { MessageCircle } from "lucide-react";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/anninha";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Anninha no WhatsApp"
      className="whatsapp-pulse-ring group fixed bottom-5 right-5 z-50 inline-flex items-center gap-0 rounded-full bg-primary p-4 text-primary-foreground shadow-lift transition-all hover:scale-105 hover:bg-primary-deep active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <MessageCircle className="size-6 shrink-0" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2 group-hover:max-w-[12rem] group-focus-visible:ml-2 group-focus-visible:max-w-[12rem]">
        Falar com a Anninha
      </span>
    </a>
  );
}
