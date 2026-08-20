import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, '../public/projects');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const PROJECTS = [
  { id: 'voiceforge', url: 'https://voicefoger.vercel.app/' },
  { id: 'orion-ai', url: 'https://orion-ai-ecru-ten.vercel.app/' },
  { id: 'ai-cyber-hq', url: 'https://ai-cyber-hq.vercel.app/' },
  { id: 'panchatar', url: 'https://panchatar.netlify.app/' },
  { id: 'food-over-dice', url: 'https://food-over-dice.netlify.app/' },
  { id: 'noire', url: 'https://noire2.netlify.app/' },
  { id: 'fondo-cafe', url: 'https://fondofcafe.netlify.app/' },
  { id: 'mori', url: 'https://mori20.netlify.app/' },
  { id: 'vante-vyro', url: 'https://vante-vyro.netlify.app/' },
  { id: 'obis', url: 'https://obis2.netlify.app/' },
  { id: 'ustina-volkova', url: 'https://ustina-volkova-beauty-salo.netlify.app/' },
  { id: 'mia-beauty', url: 'https://mia-beauty-lounge.netlify.app/' },
  { id: 'maggi-lime', url: 'https://maggi-lime.vercel.app/' },
  { id: 'outline-saloon', url: 'https://outlinesaloon.vercel.app/' },
  { id: 'ronnie-fitness', url: 'https://ronnie-sooty.vercel.app/' }
];

async function captureAll() {
  console.log('🚀 Launching Chrome for screenshot capture...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

  for (const project of PROJECTS) {
    const dest = path.join(outputDir, `${project.id}.webp`);
    if (fs.existsSync(dest)) {
      console.log(`⏩ Skipping existing ${project.id}.webp`);
      continue;
    }
    console.log(`📸 Capturing ${project.id} from ${project.url}...`);
    try {
      await page.goto(project.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      // Give animations and fonts 2.5s to settle
      await new Promise(r => setTimeout(r, 2500));
      await page.screenshot({
        path: dest,
        type: 'webp',
        quality: 85,
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      });
      console.log(`✅ Saved ${project.id}.webp`);
    } catch (err) {
      console.error(`⚠️ Failed to capture ${project.id}:`, err.message);
    }
  }

  await browser.close();
  console.log('🎉 All captures completed!');
}

captureAll();
