"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Ambientes", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-premium",
        scrolled
          ? "border-line/80 bg-background/90 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-background/70 to-transparent"
      )}
    >
      <div className="container-premium flex h-[76px] items-center justify-between md:h-24">
        <a href="#top" className="group flex items-center gap-3" aria-label="Arte JE — início">
          <span className="flex h-10 w-10 items-center justify-center border border-copper/50 font-display text-sm italic text-copper transition-colors group-hover:border-copper">
            JE
          </span>
          <span className="flex flex-col">
            <span className="font-display text-lg leading-none tracking-[0.18em] text-foreground sm:text-xl">
              ARTE JE
            </span>
            <span className="mt-1 text-[8px] uppercase tracking-[0.24em] text-muted/55">
              Marcenaria sob medida
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/65 transition-colors hover:text-copper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ variant: "primary", size: "sm" }), "hidden md:inline-flex")}
        >
          <FaWhatsapp className="text-base" aria-hidden="true" />
          Pedir orçamento
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 text-foreground md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 top-[76px] z-40 flex flex-col border-t border-line bg-background px-5 pb-8 pt-10 md:hidden"
          >
            <nav className="flex flex-1 flex-col" aria-label="Navegação mobile">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.06 }}
                  className="border-b border-line py-5 font-display text-3xl text-foreground"
                >
                  <span className="mr-4 align-middle font-body text-[9px] tracking-[0.2em] text-copper">
                    0{index + 1}
                  </span>
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.header)}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full")}
            >
              <FaWhatsapp className="text-lg" aria-hidden="true" />
              Conversar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
