import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/catalog");
fs.mkdirSync(outDir, { recursive: true });

/** Imágenes locales (Unsplash) — reemplazar con fotos reales del showroom en public/images/catalog/ */
const images = {
  "sala-showroom.jpg":
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=960&q=85",
  "sala-esquinera.jpg":
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=960&q=85",
  "sillon-tapizado.jpg":
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=960&q=85",
  "sillon-clasico.jpg":
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=960&q=85",
  "reclinable.jpg":
    "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=960&q=85",
  "futon.jpg":
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=960&q=85",
  "sofa-cama.jpg":
    "https://images.unsplash.com/photo-1540574163026-643ea20ade68?w=960&q=85",
  "sala-lineal.jpg":
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=960&q=85",
};

for (const [name, url] of Object.entries(images)) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAIL ${name}: ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(outDir, name), buf);
  console.log(`OK ${name}: ${buf.length} bytes`);
}
