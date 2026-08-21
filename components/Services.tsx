"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site";

const SERVICES = [
  {
    title: "Cozinhas planejadas",
    description: "Fluxo, armazenamento e acabamento pensados para uma cozinha bonita de viver todos os dias.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=85&w=1400&auto=format&fit=crop",
  },
  {
    title: "Dormitórios e closets",
    description: "Organização silenciosa, proporções leves e soluções que valorizam o descanso.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=85&w=1400&auto=format&fit=crop",
  },
  {
    title: "Salas e painéis",
    description: "Painéis, estantes e móveis que integram tecnologia, objetos e momentos de convivência.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1400&auto=format&fit=crop",
  },
  {
    title: "Home office e comercial",
    description: "Ambientes eficientes para trabalhar, receber e comunicar a personalidade da sua marca.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=85&w=1400&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section id="solucoes" className="relative bg-background py-24 sm:py-28 lg:py-36">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Soluções sob medida</p>
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Um mesmo cuidado, em todos os ambientes.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-muted/60">
            Conte o que você precisa. Nós ajudamos a transformar medidas, referências e rotina em uma solução coerente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <motion.a
              key={service.title}
              href={getWhatsAppUrl(`Olá! Tenho interesse em um projeto de ${service.title.toLowerCase()} com a Arte JE. Podemos conversar?`)}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative block h-[410px] overflow-hidden border border-foreground/10 sm:h-[480px]"
              aria-label={`Conversar sobre ${service.title} no WhatsApp`}
            >
              <Image
                src={service.image}
                alt={`Referência de ${service.title.toLowerCase()} com móveis sob medida`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.22em] text-cream/55">0{index + 1}</span>
                    <h3 className="mt-2 font-display text-2xl text-cream sm:text-3xl">{service.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-cream/65">{service.description}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/30 text-cream transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-cream group-hover:text-ink">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        <p className="mt-5 text-right text-[9px] uppercase tracking-[0.18em] text-muted/35">
          Imagens de referência
        </p>
      </div>
    </section>
  );
}
