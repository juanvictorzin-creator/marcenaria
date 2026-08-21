import { CTA } from "@/components/CTA";
import { Differentials } from "@/components/Differentials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MaterialStrip } from "@/components/MaterialStrip";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative overflow-clip bg-background">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <div id="conteudo">
        <Hero />
        <MaterialStrip />
        <Differentials />
        <Services />
        <Process />
        <Projects />
        <Stats />
        <CTA />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
