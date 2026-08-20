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

async function capturePortfolioScreenshots() {
  console.log('🚀 Launching Chrome to capture fresh live portfolio screenshots...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--window-size=1600,1000']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

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

  // Let fonts, gradients, and entry animations settle
  await new Promise(r => setTimeout(r, 3500));

  const saveBoth = async (filename, options) => {
    const localPath = path.join(outputDir, filename);
    await page.screenshot({ path: localPath, ...options });
    if (fs.existsSync(artifactDir)) {
      const artPath = path.join(artifactDir, filename);
      fs.copyFileSync(localPath, artPath);
    }
  };

  // 1. Hero Showcase
  console.log('📸 1. Capturing Hero Section...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 800));
  await saveBoth('01_hero_showcase.png', {
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // 2. Featured Projects Spotlight
  console.log('📸 2. Capturing Featured Projects Spotlight...');
  await page.evaluate(() => {
    const el = document.getElementById('featured') || document.querySelector('section:nth-of-type(2)');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 880);
  });
  await new Promise(r => setTimeout(r, 1200));
  await saveBoth('02_featured_spotlight.png', {
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // 3. Work / Full Project Gallery
  console.log('📸 3. Capturing Project Gallery...');
  await page.evaluate(() => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 1850);
  });
  await new Promise(r => setTimeout(r, 1200));
  await saveBoth('03_project_gallery.png', {
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // 4. Services & Process
  console.log('📸 4. Capturing Services & Process...');
  await page.evaluate(() => {
    const el = document.getElementById('services') || document.getElementById('process');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 3300);
  });
  await new Promise(r => setTimeout(r, 1200));
  await saveBoth('04_services_process.png', {
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  // 5. Contact Section / Project Order Slip
  console.log('📸 5. Capturing Contact Order Slip...');
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, 4900);
  });
  await new Promise(r => setTimeout(r, 1200));
  await saveBoth('05_contact_order_slip.png', {
    clip: { x: 0, y: 0, width: 1440, height: 900 }
  });

  await browser.close();
  console.log('🎉 Fresh high-resolution screenshots saved successfully!');
}

capturePortfolioScreenshots();
