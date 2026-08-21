import { CheckCircle2, HeartHandshake, Layers3, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const COMMITMENTS = [
  { icon: Layers3, title: "Soluções sob medida", text: "Nada de encaixes genéricos: o projeto parte do seu espaço." },
  { icon: CheckCircle2, title: "Escolhas alinhadas", text: "Materiais e acabamentos definidos com você antes da execução." },
  { icon: Wrench, title: "Montagem cuidadosa", text: "Atenção ao móvel, ao ambiente e aos detalhes de finalização." },
  { icon: HeartHandshake, title: "Contato próximo", text: "Uma conversa direta para acompanhar dúvidas e decisões." },
];

export function Stats() {
  return (
    <section className="border-y border-line bg-background py-16 sm:py-20">
      <div className="container-premium">
        <Reveal>
          <p className="mb-8 text-center text-[9px] font-semibold uppercase tracking-[0.26em] text-copper">
            O compromisso Arte JE em cada entrega
          </p>
        </Reveal>
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="h-full">
              <article className="h-full bg-background p-6 sm:p-7">
                <item.icon size={22} strokeWidth={1.35} className="text-copper" />
                <h3 className="mt-6 font-display text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-muted/55">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
