# Marcenaria Arte JE — Landing Page

Landing page responsiva para apresentação comercial e captação de orçamentos pelo WhatsApp. Construída com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## Configuração

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

O número deve conter DDI e DDD, somente dígitos. Sem essa variável, os botões abrem o WhatsApp com a mensagem pronta, mas sem destinatário definido.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
npm run lint
npm run build
```

## Conteúdo

As imagens atuais são referências do Unsplash. Para publicação comercial, substitua-as pelas fotos reais dos projetos da Arte JE. Os textos não incluem números, prazos, endereços ou garantias não confirmados.
