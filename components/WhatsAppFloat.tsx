import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/site";

export function WhatsAppFloat() {
  const href = getWhatsAppUrl(WHATSAPP_MESSAGES.header);

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar com a Arte JE no WhatsApp"
        className="group fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_16px_35px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 md:flex"
      >
        <span className="absolute inset-0 -z-10 animate-pulseRing rounded-full bg-[#25D366]" />
        <FaWhatsapp aria-hidden="true" />
        <span className="pointer-events-none absolute right-[4.6rem] whitespace-nowrap rounded-md bg-cream px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink opacity-0 shadow-xl transition-all group-hover:translate-x-0 group-hover:opacity-100">
          Fale no WhatsApp
        </span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-50 flex h-[76px] items-center justify-between border-t border-ink/10 bg-cream px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.15)] md:hidden">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-wood">Tem um projeto?</p>
          <p className="mt-1 text-xs text-ink/60">Converse direto com a Arte JE</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
        >
          <FaWhatsapp className="text-base" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
