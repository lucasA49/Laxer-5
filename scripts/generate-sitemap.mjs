// client/scripts/generate-sitemap.mjs
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

// 👉 liste des pages à référencer (ajoute/modifie si tu crées d'autres pages)
const urls = [
  { loc: "https://www.laxer5.fr/",                changefreq: "weekly",  priority: "1.0" },
  { loc: "https://www.laxer5.fr/accueil",         changefreq: "monthly", priority: "0.8" },
  { loc: "https://www.laxer5.fr/entreprise",      changefreq: "monthly", priority: "0.7" },
  { loc: "https://www.laxer5.fr/services",        changefreq: "monthly", priority: "0.7" },
  { loc: "https://www.laxer5.fr/nosmachines",     changefreq: "monthly", priority: "0.7" },
  { loc: "https://www.laxer5.fr/contact",         changefreq: "yearly",  priority: "0.5" },
  { loc: "https://www.laxer5.fr/mentions-legales",changefreq: "yearly",  priority: "0.3" },
];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n") +
  `\n</urlset>\n`;

const outSitemap = resolve(process.cwd(), "dist", "sitemap.xml");
await writeFile(outSitemap, xml, "utf8");
console.log("✅ sitemap.xml générée →", outSitemap);

// Génère aussi un robots.txt standard
const robots =
`User-agent: *
Allow: /

Sitemap: https://www.laxer5.fr/sitemap.xml
`;
const outRobots = resolve(process.cwd(), "dist", "robots.txt");
await writeFile(outRobots, robots, "utf8");
console.log("✅ robots.txt généré →", outRobots);
