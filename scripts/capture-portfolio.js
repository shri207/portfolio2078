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

const targetUrl = 'https://portfolio2078.netlify.app/';

async function captureCorrectScreenshots() {
  console.log('🚀 Launching Chrome to capture distinctly scrolled sections...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

  console.log(`🌐 Navigating to ${targetUrl}...`);
  await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 30000 }).catch(async () => {
    await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
  });

  // Hide any potential netlify badges or injected drawer frames
  await page.evaluate(() => {
    const selectors = [
      '#netlify-drawer',
      '.netlify-badge',
      '[data-netlify-drawer]',
      '.netlify-feedback-drawer',
      'iframe[src*="netlify"]'
    ];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });
  });

  await new Promise(r => setTimeout(r, 2500));

  const saveBoth = async (filename) => {
    const localPath = path.join(outputDir, filename);
    // Notice: NO clip parameter, so it captures the exact scrolled viewport!
    await page.screenshot({ path: localPath, type: 'png' });
    if (fs.existsSync(artifactDir)) {
      const artPath = path.join(artifactDir, filename);
      fs.copyFileSync(localPath, artPath);
    }
  };

  // 1. Hero Showcase (top of page)
  console.log('📸 1. Capturing 01_hero_showcase.png...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1200));
  await saveBoth('01_hero_showcase.png');

  // 2. Featured Projects Spotlight
  console.log('📸 2. Capturing 02_featured_spotlight.png...');
  await page.evaluate(() => {
    const el = document.getElementById('featured') || document.querySelector('section:nth-of-type(2)');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 950);
  });
  await new Promise(r => setTimeout(r, 1200));
  await saveBoth('02_featured_spotlight.png');

  // 3. Work / Full Project Gallery Grid
  console.log('📸 3. Capturing 03_project_gallery.png...');
  await page.evaluate(() => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 2100);
  });
  await new Promise(r => setTimeout(r, 1200));
  await saveBoth('03_project_gallery.png');

  // 4. Services & Process
  console.log('📸 4. Capturing 04_services_process.png...');
  await page.evaluate(() => {
    const el = document.getElementById('services') || document.getElementById('process');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 3600);
  });
  await new Promise(r => setTimeout(r, 1200));
  await saveBoth('04_services_process.png');

  // 5. Contact Section / Project Order Slip
  console.log('📸 5. Capturing 05_contact_order_slip.png...');
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 5200);
  });
  await new Promise(r => setTimeout(r, 1200));
  await saveBoth('05_contact_order_slip.png');

  await browser.close();
  console.log('🎉 Done! All 5 distinct section screenshots saved.');
}

captureCorrectScreenshots();
