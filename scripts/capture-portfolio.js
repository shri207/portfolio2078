import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, '../public/screenshots');
const artifactDir = 'C:\\Users\\shrik\\.gemini\\antigravity-ide\\brain\\b4fb3698-5b08-4c77-8700-bc5a590e0370';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const liveUrl = 'https://portfolio2078.netlify.app/';

async function captureLivePortfolio() {
  console.log(`🚀 Connecting to ${liveUrl} to capture live screenshots...`);
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  await page.goto(liveUrl, { waitUntil: 'networkidle2', timeout: 30000 }).catch(async () => {
    await page.goto(liveUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  });

  // Ensure any injected dev tools or badges are cleaned
  await page.evaluate(() => {
    document.querySelectorAll('#netlify-drawer, .netlify-badge, [data-netlify-drawer], .netlify-feedback-drawer, iframe[src*="netlify"]').forEach(el => el.remove());
  });

  await new Promise(r => setTimeout(r, 2000));

  const save = async (name) => {
    const local = path.join(outputDir, name);
    await page.screenshot({ path: local, type: 'png' });
    if (fs.existsSync(artifactDir)) {
      fs.copyFileSync(local, path.join(artifactDir, name));
    }
    console.log(`✅ Saved ${name}`);
  };

  // 1. Hero Showcase
  console.log('📸 Capturing Hero...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));
  await save('01_hero_showcase.png');

  // 2. Featured Projects Spotlight
  console.log('📸 Capturing Featured Spotlight...');
  await page.evaluate(() => {
    const el = document.getElementById('featured') || document.querySelector('section:nth-of-type(2)');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 850);
  });
  await new Promise(r => setTimeout(r, 1000));
  await save('02_featured_spotlight.png');

  // 3. Work / Full 15 Project Gallery
  console.log('📸 Capturing Project Gallery...');
  await page.evaluate(() => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 1850);
  });
  await new Promise(r => setTimeout(r, 1000));
  await save('03_project_gallery.png');

  // 4. Services & Process
  console.log('📸 Capturing Services & Process...');
  await page.evaluate(() => {
    const el = document.getElementById('services') || document.getElementById('process');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 3400);
  });
  await new Promise(r => setTimeout(r, 1000));
  await save('04_services_process.png');

  // 5. Contact Section / Order Slip
  console.log('📸 Capturing Contact Section...');
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 5000);
  });
  await new Promise(r => setTimeout(r, 1000));
  await save('05_contact_order_slip.png');

  await browser.close();
  console.log('🎉 All live screenshots captured directly from https://portfolio2078.netlify.app/ !');
}

captureLivePortfolio();
