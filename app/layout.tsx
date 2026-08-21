import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Marcenaria Arte JE | Móveis sob medida",
  description:
    "Móveis sob medida para cozinhas, dormitórios, salas, escritórios e ambientes comerciais. Projeto personalizado, produção cuidadosa e montagem especializada.",
  keywords: [
    "Marcenaria Arte JE",
    "móveis sob medida",
    "móveis planejados",
    "cozinha planejada",
    "marcenaria personalizada",
  ],
  openGraph: {
    title: "Marcenaria Arte JE | Móveis sob medida",
    description: "Projetos pensados para o seu espaço, a sua rotina e o seu estilo.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Marcenaria Arte JE | Móveis sob medida",
    description: "Projetos pensados para o seu espaço, a sua rotina e o seu estilo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased selection:bg-copper selection:text-ink">
        {children}
      </body>
    </html>
  );
}
