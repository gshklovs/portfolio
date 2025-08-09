import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const repoRoot = process.cwd();
const rawDir = path.join(repoRoot, "raw-images");
const outputDirs = [
  path.join(repoRoot, "public", "img"),
  path.join(repoRoot, "portfolio-next", "public", "img"),
  path.join(repoRoot, "portfolio", "public", "img"),
];

const widths = [800, 1200, 1600];
const qualities = {
  jpeg: 80,
  webp: 75,
  avif: 45,
};

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function isImageFile(filename) {
  return /(\.png|\.jpe?g|\.webp|\.avif)$/i.test(filename);
}

function baseNameNoExt(file) {
  const ext = path.extname(file);
  return path.basename(file, ext);
}

async function processOne(inputPath) {
  const file = path.basename(inputPath);
  const name = baseNameNoExt(file);

  for (const width of widths) {
    const pipeline = sharp(inputPath, { failOn: "none" }).rotate().flatten({ background: "#ffffff" });
    const resized = pipeline.resize({ width, withoutEnlargement: true, fit: "inside" });

    // JPEG
    const jpegBuf = await resized
      .clone()
      .jpeg({ quality: qualities.jpeg, mozjpeg: true, chromaSubsampling: "4:2:0" })
      .toBuffer();
    // WEBP
    const webpBuf = await resized
      .clone()
      .webp({ quality: qualities.webp, effort: 5 })
      .toBuffer();
    // AVIF
    const avifBuf = await resized
      .clone()
      .avif({ quality: qualities.avif, effort: 5 })
      .toBuffer();

    for (const outDir of outputDirs) {
      await ensureDir(outDir);
      await fs.writeFile(path.join(outDir, `${name}-${width}.jpg`), jpegBuf);
      await fs.writeFile(path.join(outDir, `${name}-${width}.webp`), webpBuf);
      await fs.writeFile(path.join(outDir, `${name}-${width}.avif`), avifBuf);
    }
  }
}

async function main() {
  await Promise.all(outputDirs.map(ensureDir));
  await ensureDir(rawDir);

  const entries = await fs.readdir(rawDir, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile() && isImageFile(e.name)).map((e) => path.join(rawDir, e.name));
  if (files.length === 0) {
    console.log(`No images found in ${rawDir}. Add originals to process.`);
    return;
  }

  console.log(`Processing ${files.length} images from ${rawDir}...`);
  const start = Date.now();

  for (const file of files) {
    try {
      console.log(`→ ${path.basename(file)}`);
      await processOne(file);
    } catch (err) {
      console.error(`Failed: ${file}`);
      console.error(err);
    }
  }

  console.log(`Done in ${(Date.now() - start) / 1000}s.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});