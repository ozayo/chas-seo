import { writeFileSync } from 'fs';
import path from 'path';

// const hostname = 'http://localhost:5173';
const hostname = 'https://chas-seo.vercel.app';


const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 }
];

const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  routes.forEach(route => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${hostname}${route.url}</loc>\n`;
    sitemap += `    <changefreq>${route.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${route.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>`;

  //write Sitemap.xml in public folder
  writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap, 'utf8');
  console.log('Sitemap has been generated.');
};

generateSitemap();


// for create sitemap use on terminal
// npm run generate-sitemap