import Image from "next/image";
import { PencilRuler, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const DIFFERENTIALS = [
  {
    icon: ScanLine,
    title: "Cada centímetro bem pensado",
    description: "Soluções desenhadas a partir das medidas, da circulação e das necessidades reais do ambiente.",
  },
  {
    icon: PencilRuler,
    title: "Decisões com clareza",
    description: "Você acompanha materiais, acabamentos e detalhes antes de a produção começar.",
  },
  {
    icon: Sparkles,
    title: "Acabamento que se percebe",
    description: "Cuidado nos encontros, ferragens e superfícies para um resultado preciso e agradável ao toque.",
  },
  {
    icon: ShieldCheck,
    title: "Acompanhamento até o final",
    description: "Do primeiro contato à montagem, o projeto segue um fluxo organizado e próximo.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-cream py-24 text-ink sm:py-28 lg:py-36">
      <div className="container-premium grid items-stretch gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative h-full min-h-[480px] overflow-hidden rounded-t-[9rem] rounded-br-3xl">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=85&w=1400&auto=format&fit=crop"
              alt="Detalhe de marcenaria em madeira natural em ambiente contemporâneo"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 border-l border-copper pl-4 text-cream sm:bottom-8 sm:left-8">
              <p className="text-[9px] uppercase tracking-[0.24em] text-cream/65">Nossa forma de trabalhar</p>
              <p className="mt-2 max-w-xs font-display text-2xl leading-tight">Medir, planejar, produzir e cuidar.</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:py-5">
          <Reveal>
            <p className="eyebrow mb-5">Por que escolher a Arte JE</p>
            <h2 className="text-balance max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Feito para caber no espaço — e fazer sentido na sua rotina.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ink/65 sm:text-base">
              Marcenaria sob medida é mais do que preencher uma parede. É combinar ergonomia, organização e estética em uma solução que parece ter nascido junto com o ambiente.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-2">
            {DIFFERENTIALS.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="h-full">
                <article className="group flex h-full min-h-56 flex-col bg-cream p-6 transition-colors duration-500 hover:bg-paper sm:p-8">
                  <div className="flex items-center justify-between">
                    <item.icon size={23} strokeWidth={1.35} className="text-wood" />
                    <span className="font-display text-sm italic text-ink/30">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
