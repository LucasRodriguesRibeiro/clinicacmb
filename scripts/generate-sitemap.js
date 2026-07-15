import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper for relative paths in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workspaceRoot = path.resolve(__dirname, '..');
const routesPath = path.join(workspaceRoot, 'seo', 'routes.json');
const constantsPath = path.join(workspaceRoot, 'constants.tsx');
const publicDir = path.join(workspaceRoot, 'public');

console.log('--- GERADOR DE SITEMAP & ROBOTS.TXT ---');

try {
  // 1. Read static routes from routes.json
  const routesData = JSON.parse(fs.readFileSync(routesPath, 'utf8'));
  const entries = [];

  // Add static routes
  for (const route of routesData) {
    entries.push({
      loc: `https://cmbclinica.com.br${route.path === '/' ? '' : route.path}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: route.changefreq || 'monthly',
      priority: route.priority || 0.8
    });
  }

  // 2. Parse constants.tsx to find doctor IDs for dynamic paths
  if (fs.existsSync(constantsPath)) {
    const constantsContent = fs.readFileSync(constantsPath, 'utf8');
    
    // Extract only the DOCTORS array portion
    const doctorsArrayMatch = constantsContent.match(/export\s+const\s+DOCTORS[\s\S]*?=\s*\[([\s\S]*?)\];/);
    const doctorIds = [];

    if (doctorsArrayMatch) {
      const doctorsArrayContent = doctorsArrayMatch[1];
      const doctorIdRegex = /id:\s*['"]([a-zA-Z0-9-]+)['"]/g;
      let match;

      while ((match = doctorIdRegex.exec(doctorsArrayContent)) !== null) {
        doctorIds.push(match[1]);
      }
    }

    console.log(`Encontrados ${doctorIds.length} médicos em DOCTORS para indexação.`);

    // Add doctor routes: /medicos/:id
    for (const docId of doctorIds) {
      entries.push({
        loc: `https://cmbclinica.com.br/medicos/${docId}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'monthly',
        priority: 0.8
      });
    }
  } else {
    console.warn('AVISO: constants.tsx não encontrado. Pulando rotas dos médicos.');
  }

  // 3. Generate sitemap.xml content
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const entry of entries) {
    xml += '  <url>\n';
    xml += `    <loc>${entry.loc}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority.toFixed(1)}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap.xml
  const sitemapDest = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapDest, xml, 'utf8');
  console.log(`Sitemap gerado com sucesso em: ${sitemapDest} (${entries.length} URLs)`);

  // 4. Ensure robots.txt is present and matches the sitemap link
  const robotsDest = path.join(publicDir, 'robots.txt');
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://cmbclinica.com.br/sitemap.xml
`;
  fs.writeFileSync(robotsDest, robotsTxt, 'utf8');
  console.log(`Robots.txt atualizado com sucesso em: ${robotsDest}`);

} catch (error) {
  console.error('ERRO ao gerar sitemap/robots.txt:', error);
  process.exit(1);
}
