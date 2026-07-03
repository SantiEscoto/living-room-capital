import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images/catalog");
fs.mkdirSync(outDir, { recursive: true });

const CONSTRUEX_BASE =
  "https://www.construex.com.mx/exhibidores/living_room_capital/producto/";

const products = [
  { slug: "muebles_s_mexico", file: "construex-s.jpg" },
  { slug: "muebles_q_mexico", file: "construex-q.jpg" },
  { slug: "muebles_e_mexico", file: "construex-e.jpg" },
  { slug: "muebles_x_mexico_", file: "construex-x.jpg" },
  { slug: "muebles_w_mexico", file: "construex-w.jpg" },
  { slug: "muebles_f_mexico", file: "construex-f.jpg" },
  { slug: "muebles_t_mexico", file: "construex-t.jpg" },
  { slug: "muebles_a_mexico", file: "construex-a.jpg" },
  { slug: "muebles_d_mexico", file: "construex-d.jpg" },
  { slug: "muebles_y_mexico", file: "construex-y.jpg" },
];

for (const { slug, file } of products) {
  const res = await fetch(CONSTRUEX_BASE + slug);
  const html = await res.text();
  const og = html.match(/property="og:image" content="([^"]+)"/);
  if (!og?.[1]) {
    console.error(`FAIL ${file}: no og:image for ${slug}`);
    continue;
  }
  const imgRes = await fetch(og[1]);
  const buf = Buffer.from(await imgRes.arrayBuffer());
  fs.writeFileSync(path.join(outDir, file), buf);
  console.log(`OK ${file}: ${buf.length} bytes`);
}
