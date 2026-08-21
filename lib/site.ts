export const SITE_NAME = "Marcenaria Arte JE";

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Marcenaria Arte JE e gostaria de conversar sobre um projeto sob medida.";

export function getWhatsAppUrl(message = DEFAULT_MESSAGE) {
  const destination = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}`
    : "https://wa.me/";

  return `${destination}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  header:
    "Olá! Vim pelo site da Marcenaria Arte JE e gostaria de solicitar um orçamento.",
  hero:
    "Olá! Quero transformar um ambiente com a Marcenaria Arte JE. Podemos conversar sobre meu projeto?",
  projects:
    "Olá! Vi os ambientes no site da Arte JE e gostaria de receber ideias para o meu projeto.",
  process:
    "Olá! Gostaria de entender como funciona o projeto sob medida da Arte JE.",
  final:
    "Olá! Quero solicitar um orçamento com a Arte JE. Ambiente: [informe aqui]. Cidade: [informe aqui].",
} as const;
