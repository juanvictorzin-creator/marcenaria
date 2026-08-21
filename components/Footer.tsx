import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/site";

const LINKS = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Ambientes", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="bg-background pb-6 pt-14 sm:pb-10 sm:pt-24">
      <div className="container-premium">
        <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-12 md:gap-8 md:pb-14">
          <div className="md:col-span-6">
            <a href="#top" className="inline-flex items-center gap-4" aria-label="Arte JE — voltar ao início">
              <span className="flex h-12 w-12 items-center justify-center border border-copper/50 font-display italic text-copper">JE</span>
              <span>
                <span className="block font-display text-2xl tracking-[0.18em] text-foreground">ARTE JE</span>
                <span className="mt-1 block text-[8px] uppercase tracking-[0.24em] text-muted/50">Marcenaria sob medida</span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted/55 sm:mt-7 sm:leading-7">
              Móveis planejados para aproveitar melhor o espaço, facilitar a rotina e dar identidade a cada ambiente.
            </p>
          </div>

          <div className="hidden md:col-span-3 md:block">
            <p className="eyebrow mb-5">Navegação</p>
            <ul className="space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted/60 transition-colors hover:text-copper">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Fale com a gente</p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-copper"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-lg text-white">
                <FaWhatsapp aria-hidden="true" />
              </span>
              WhatsApp
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-5 text-[9px] leading-5 text-muted/35 sm:flex-row sm:items-center sm:justify-between sm:py-7 sm:text-[10px]">
          <p>© {new Date().getFullYear()} Marcenaria Arte JE. Todos os direitos reservados.</p>
          <p>Imagens de referência; substitua pelo portfólio real da marcenaria.</p>
        </div>
      </div>
    </footer>
  );
}
