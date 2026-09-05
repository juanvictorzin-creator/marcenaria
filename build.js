import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = join(projectDirectory, "dist");
const clientDirectory = join(outputDirectory, "client");
const publicDirectory = join(clientDirectory, "public");
const siteUrl = "https://marcenaria-arte-je.juanvictorzzx.chatgpt.site";

const sourceHtml = await readFile(join(projectDirectory, "index.html"), "utf8");
const styles = await readFile(join(projectDirectory, "styles.css"), "utf8");
const script = await readFile(join(projectDirectory, "script.js"), "utf8");

const socialImageUrl = `${siteUrl}/public/og.png`;
const html = sourceHtml
  .replace(
    '<meta property="og:title" content="Marcenaria Arte JE | Móveis sob medida" />',
    `<meta property="og:title" content="Marcenaria Arte JE | Móveis sob medida" />\n    <meta property="og:image" content="${socialImageUrl}" />`,
  )
  .replace('<meta name="twitter:card" content="summary" />', '<meta name="twitter:card" content="summary_large_image" />')
  .replace(
    '<meta name="twitter:title" content="Marcenaria Arte JE | Móveis sob medida" />',
    `<meta name="twitter:title" content="Marcenaria Arte JE | Móveis sob medida" />\n    <meta name="twitter:image" content="${socialImageUrl}" />`,
  );

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(join(outputDirectory, "server"), { recursive: true });
await mkdir(publicDirectory, { recursive: true });

await writeFile(join(clientDirectory, "index.html"), html);
await writeFile(join(clientDirectory, "styles.css"), styles);
await writeFile(join(clientDirectory, "script.js"), script);
await cp(join(projectDirectory, "public", "logo_JE.png"), join(publicDirectory, "logo_JE.png"));
await cp(join(projectDirectory, "public", "og.png"), join(publicDirectory, "og.png"));
await cp(join(projectDirectory, "public", "whatsapp.svg"), join(publicDirectory, "whatsapp.svg"));

const workerSource = `
const INDEX_HTML = ${JSON.stringify(html)};
const STYLES = ${JSON.stringify(styles)};
const SCRIPT = ${JSON.stringify(script)};

const headers = {
  "cache-control": "public, max-age=3600",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
};

function textResponse(body, contentType) {
  return new Response(body, {
    headers: { ...headers, "content-type": contentType },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (env?.ASSETS) {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) return assetResponse;
    }

    if (url.pathname === "/styles.css") {
      return textResponse(STYLES, "text/css; charset=utf-8");
    }

    if (url.pathname === "/script.js") {
      return textResponse(SCRIPT, "text/javascript; charset=utf-8");
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return textResponse(INDEX_HTML, "text/html; charset=utf-8");
    }

    return new Response("Não encontrado", { status: 404, headers });
  },
};
`.trimStart();

await writeFile(join(outputDirectory, "server", "index.js"), workerSource);

console.log("Build estático concluído em dist/.");
