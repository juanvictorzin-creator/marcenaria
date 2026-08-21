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
        className="group fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-[0_12px_28px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1 md:bottom-6 md:right-6 md:h-16 md:w-16 md:text-2xl"
      >
        <span className="absolute inset-0 -z-10 animate-pulseRing rounded-full bg-[#25D366]" />
        <FaWhatsapp aria-hidden="true" />
        <span className="pointer-events-none absolute right-[4.6rem] hidden whitespace-nowrap rounded-md bg-cream px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink opacity-0 shadow-xl transition-all group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Fale no WhatsApp
        </span>
      </a>

    </>
  );
}
