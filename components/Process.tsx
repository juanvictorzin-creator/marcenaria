import { ArrowRight, FilePenLine, Hammer, MessagesSquare, Ruler } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: MessagesSquare,
    title: "Conversa inicial",
    description: "Você compartilha o ambiente, as necessidades e as referências que representam o seu estilo.",
  },
  {
    icon: Ruler,
    title: "Levantamento",
    description: "Organizamos medidas e informações para entender possibilidades, limites e prioridades.",
  },
  {
    icon: FilePenLine,
    title: "Projeto e escolhas",
    description: "Definimos layout, materiais, acabamentos e detalhes antes de seguir para a execução.",
  },
  {
    icon: Hammer,
    title: "Produção e montagem",
    description: "Cada peça ganha forma e é instalada com atenção ao ambiente e ao acabamento final.",
  },
];

export function Process() {
  return (
    <section id="processo" className="bg-paper py-24 text-ink sm:py-28 lg:py-36">
      <div className="container-premium">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-5">Como funciona</p>
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Um caminho claro da ideia à instalação.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-ink/60">
              Você participa das decisões importantes e sabe o que acontece em cada etapa do projeto.
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.process)}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "mt-8 w-full sm:w-auto"
              )}
            >
              <FaWhatsapp className="text-lg" aria-hidden="true" />
              Tirar uma dúvida
              <ArrowRight size={15} />
            </a>
          </Reveal>

          <div className="relative lg:col-span-8">
            <div className="absolute bottom-10 left-[23px] top-10 w-px bg-ink/15 sm:hidden" />
            <div className="hidden h-px w-full bg-ink/15 sm:absolute sm:left-0 sm:right-0 sm:top-8 sm:block" />
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
              {STEPS.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.07}>
                  <article className="relative flex gap-5 sm:block">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper text-wood sm:h-16 sm:w-16">
                      <step.icon size={21} strokeWidth={1.35} />
                    </div>
                    <div className="pt-1 sm:pt-6">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-wood">Etapa 0{index + 1}</span>
                      <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-ink/60">{step.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
