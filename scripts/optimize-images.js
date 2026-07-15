import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workspaceRoot = path.resolve(__dirname, '..');
const srcImagensDir = path.join(workspaceRoot, 'imagens');
const srcProfissionaisDir = path.join(workspaceRoot, 'public', 'profissionais'); // PNGs are already inside public/profissionais
const destImagensDir = path.join(workspaceRoot, 'public', 'imagens');
const destProfissionaisDir = path.join(workspaceRoot, 'public', 'profissionais');

console.log('--- OTIMIZADOR DE IMAGENS (PNG -> WEBP) ---');

// Create destination directories if they do not exist
if (!fs.existsSync(destImagensDir)) {
  fs.mkdirSync(destImagensDir, { recursive: true });
}
if (!fs.existsSync(destProfissionaisDir)) {
  fs.mkdirSync(destProfissionaisDir, { recursive: true });
}

// Function to optimize a single image to WebP
async function optimizeImage(srcPath, destPath, quality = 80, resizeWidth = null) {
  try {
    let pipeline = sharp(srcPath);

    if (resizeWidth) {
      pipeline = pipeline.resize({ width: resizeWidth, withoutEnlargement: true });
    }

    await pipeline
      .webp({ quality })
      .toFile(destPath);

    const srcSize = fs.statSync(srcPath).size;
    const destSize = fs.statSync(destPath).size;
    const savings = ((srcSize - destSize) / srcSize * 100).toFixed(1);

    console.log(`Sucesso: ${path.basename(srcPath)} -> ${path.basename(destPath)}`);
    console.log(`  Tamanho: ${(srcSize / 1024).toFixed(1)} KB -> ${(destSize / 1024).toFixed(1)} KB (-${savings}%)`);
  } catch (error) {
    console.error(`Erro ao processar imagem ${srcPath}:`, error.message);
  }
}

async function run() {
  // 1. Optimize Hero Image (fachada.png)
  const heroSrc = path.join(srcImagensDir, 'fachada.png');
  const heroDest = path.join(destImagensDir, 'fachada.webp');

  if (fs.existsSync(heroSrc)) {
    console.log('Otimizando imagem principal da Hero...');
    // Compress and resize to max width 1920 for high performance LCP
    await optimizeImage(heroSrc, heroDest, 80, 1920);
  } else {
    console.warn(`AVISO: Fachada principal não encontrada em: ${heroSrc}`);
  }

  // 2. Optimize Doctor Avatars in public/profissionais/
  console.log('Otimizando fotos dos médicos...');
  if (fs.existsSync(srcProfissionaisDir)) {
    const files = fs.readdirSync(srcProfissionaisDir);
    for (const file of files) {
      if (file.toLowerCase().endsWith('.png')) {
        const docSrc = path.join(srcProfissionaisDir, file);
        const docDestName = file.replace(/\.png$/i, '.webp');
        const docDest = path.join(destProfissionaisDir, docDestName);

        // Compress and resize avatars to 400px width (since they are rendered as small circle grids, 400px is more than enough for crisp resolution!)
        await optimizeImage(docSrc, docDest, 80, 400);
      }
    }
  } else {
    console.warn(`AVISO: Pasta de profissionais não encontrada em: ${srcProfissionaisDir}`);
  }

  // 3. Generate PNG favicons from SVG for manifest support
  const faviconSrc = path.join(workspaceRoot, 'public', 'favicon.svg');
  const favicon192 = path.join(workspaceRoot, 'public', 'favicon-192.png');
  const favicon512 = path.join(workspaceRoot, 'public', 'favicon-512.png');

  if (fs.existsSync(faviconSrc)) {
    console.log('Gerando ícones PNG a partir do favicon.svg para manifest/PWA...');
    try {
      await sharp(faviconSrc)
        .resize(192, 192)
        .png()
        .toFile(favicon192);
      console.log('Favicon 192x192 PNG gerado com sucesso.');

      await sharp(faviconSrc)
        .resize(512, 512)
        .png()
        .toFile(favicon512);
      console.log('Favicon 512x512 PNG gerado com sucesso.');
    } catch (e) {
      console.error('Erro ao gerar ícones PNG a partir do SVG:', e.message);
    }
  } else {
    console.warn(`AVISO: favicon.svg não encontrado em: ${faviconSrc}`);
  }

  console.log('Processamento de imagens concluído.');
}

run();
