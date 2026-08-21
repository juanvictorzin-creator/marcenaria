"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

const benefits = ["Projeto personalizado", "Produção cuidadosa", "Montagem especializada"];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="grain relative overflow-hidden border-b border-line bg-background pt-[68px] md:flex md:min-h-screen md:items-center md:pt-24"
    >
      <div className="pointer-events-none absolute left-[-8rem] top-32 h-80 w-80 rounded-full bg-wood/10 blur-[120px]" />

      <div className="container-premium relative z-10 grid w-full items-center gap-8 pb-12 pt-9 md:grid-cols-12 md:gap-8 md:py-20">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
          className="md:col-span-7 lg:col-span-6"
        >
          <motion.div variants={reveal} className="mb-5 flex items-center gap-3 sm:mb-7">
            <span className="h-px w-10 bg-copper" />
            <p className="eyebrow">Móveis planejados para a vida real</p>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="text-balance font-display text-[clamp(2.5rem,11vw,4.6rem)] leading-[1] tracking-[-0.035em] text-foreground lg:text-[5.2rem]"
          >
            Seu espaço com mais <span className="italic text-copper">beleza</span>, função e identidade.
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-5 max-w-xl text-sm leading-6 text-muted/75 sm:mt-7 sm:text-base sm:leading-7"
          >
            A Arte JE transforma ideias em móveis sob medida, pensados para aproveitar cada centímetro e acompanhar a sua rotina por muitos anos.
          </motion.p>

          <motion.div variants={reveal} className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full sm:w-auto")}
            >
              <FaWhatsapp className="text-lg" aria-hidden="true" />
              Solicitar orçamento
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projetos"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
            >
              Ver ambientes
            </a>
          </motion.div>

          <motion.ul variants={reveal} className="mt-6 grid grid-cols-2 gap-x-3 gap-y-3 text-[10px] text-muted/65 sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-5 sm:text-[11px]">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-copper/50 text-copper">
                  <Check size={10} strokeWidth={2} />
                </span>
                {benefit}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[320px] md:col-span-5 md:h-[70vh] lg:col-span-6 lg:h-[76vh]"
        >
          <div className="absolute -left-3 -top-3 hidden h-24 w-24 border-l border-t border-copper/60 sm:block sm:-left-5 sm:-top-5" />
          <div className="relative h-full overflow-hidden rounded-t-[5rem] rounded-br-[1.25rem] border border-foreground/10 sm:rounded-t-[10rem]">
            <motion.div style={{ y: imageY }} className="relative h-[112%] w-full">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1800&auto=format&fit=crop"
                alt="Cozinha contemporânea com armários de madeira natural feitos sob medida"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/10" />
          </div>

          <div className="absolute -bottom-5 right-5 hidden w-64 border border-foreground/10 bg-surface/95 p-5 shadow-2xl backdrop-blur sm:block">
            <p className="eyebrow mb-2">Do desenho à montagem</p>
            <p className="font-display text-lg leading-snug text-foreground">
              Um projeto criado em torno de você.
            </p>
          </div>
        </motion.div>
      </div>

      <a
        href="#diferenciais"
        className="absolute bottom-8 left-10 hidden items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-muted/45 transition-colors hover:text-copper xl:flex"
      >
        <ArrowDown size={14} />
        Descubra a Arte JE
      </a>
    </section>
  );
}
