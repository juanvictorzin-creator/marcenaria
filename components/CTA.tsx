"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

const DETAILS = ["Qual ambiente você quer transformar", "Sua cidade", "Fotos, medidas ou referências (se tiver)"];

export function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-cream py-16 text-ink sm:py-28 lg:py-36">
      <div className="container-premium">
        <div className="relative overflow-hidden bg-ink">
          <div className="absolute inset-0 lg:left-[58%]">
            <Image
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=85&w=1600&auto=format&fit=crop"
              alt="Ambiente acolhedor com móveis em madeira sob medida"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover opacity-45 lg:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
          </div>

          <div className="relative z-10 grid min-h-[520px] items-center sm:min-h-[600px] lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-12 lg:col-span-7 lg:p-16"
            >
              <p className="eyebrow mb-5">Vamos tirar sua ideia do papel?</p>
              <h2 className="text-balance max-w-2xl font-display text-3xl leading-[1.06] tracking-tight text-cream sm:text-5xl lg:text-6xl">
                Seu novo ambiente pode começar com uma mensagem.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-cream/65 sm:mt-6 sm:text-base sm:leading-7">
                Conte um pouco sobre o que você imagina. A conversa inicial ajuda a entender o projeto e os próximos passos.
              </p>

              <div className="mt-6 border-l border-copper pl-4 sm:mt-8 sm:pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/45">Para agilizar, envie:</p>
                <ul className="mt-4 space-y-3">
                  {DETAILS.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-sm text-cream/75">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-copper/15 text-copper">
                        <Check size={11} />
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.final)}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-7 w-full sm:mt-9 sm:w-auto")}
              >
                <FaWhatsapp className="text-lg" aria-hidden="true" />
                Começar meu orçamento
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-[10px] text-cream/40">Contato direto pelo WhatsApp.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
