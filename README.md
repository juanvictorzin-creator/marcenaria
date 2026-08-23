# Marcenaria Arte JE — versão estática

Landing page responsiva feita apenas com HTML, CSS e JavaScript, sem React, Next.js, TypeScript ou bibliotecas de interface.

## Arquivos principais

- `index.html`: conteúdo e estrutura da página.
- `styles.css`: identidade visual e responsividade.
- `script.js`: menu mobile, animações, parallax e links do WhatsApp.
- `build.js`: prepara a pasta `dist` para publicação; não faz parte do site no navegador.

## Configurar o WhatsApp

Abra `script.js` e informe o número com DDI e DDD, usando somente dígitos:

```js
const WHATSAPP_NUMBER = "5511999999999";
```

Sem um número definido, os botões abrem o WhatsApp com a mensagem pronta e permitem escolher o contato.

## Abrir localmente

Abra `index.html` diretamente no navegador ou execute um servidor estático nesta pasta:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

As imagens atuais são referências do Unsplash. Para uso comercial, substitua-as pelas fotos reais dos projetos da Arte JE.
