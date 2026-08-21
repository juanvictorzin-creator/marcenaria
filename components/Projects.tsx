"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "Madeira e luz natural",
    category: "Cozinha integrada",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=85&w=1600&auto=format&fit=crop",
    className: "md:col-span-7 md:row-span-2 md:min-h-[660px]",
  },
  {
    title: "Organização sem excessos",
    category: "Dormitório",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=1400&auto=format&fit=crop",
    className: "md:col-span-5 md:min-h-[318px]",
  },
  {
    title: "Texturas que acolhem",
    category: "Living",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1400&auto=format&fit=crop",
    className: "md:col-span-5 md:min-h-[318px]",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="bg-surface py-24 sm:py-28 lg:py-36">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 grid gap-7 md:mb-16 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-8">
            <p className="eyebrow mb-5">Ambientes que inspiram</p>
            <h2 className="text-balance max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Materiais, proporções e detalhes em harmonia.
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted/60 md:col-span-4">
            Referências visuais para imaginar como a marcenaria pode mudar a sensação e o uso de cada ambiente.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-12">
          {PROJECTS.map((project, index) => (
            <motion.figure
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={cn("group relative min-h-[390px] overflow-hidden", project.className)}
            >
              <Image
                src={project.image}
                alt={`Referência de ${project.category.toLowerCase()} com ${project.title.toLowerCase()}`}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="text-[9px] uppercase tracking-[0.22em] text-cream/55">{project.category}</span>
                <h3 className="mt-2 font-display text-2xl text-cream sm:text-3xl">{project.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-muted/55">
            Tem uma referência salva? Envie pelo WhatsApp. Ela ajuda a entender o estilo que você busca.
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.projects)}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
          >
            <FaWhatsapp className="text-lg" aria-hidden="true" />
            Enviar referências
            <ArrowRight size={15} />
          </a>
        </div>
        <p className="mt-4 text-[9px] uppercase tracking-[0.18em] text-muted/30">Imagens de referência</p>
      </div>
    </section>
  );
}
