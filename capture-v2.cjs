
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function capture() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();

    const outDir = '/home/hermes/jyu-slidev-theme/screenshots-v2';
    fs.mkdirSync(outDir, { recursive: true });

    // LIGHT MODE
    console.log('=== LIGHT MODE ===');
    for (let i = 1; i <= 15; i++) {
        await page.goto(`https://jyu-theme.dezhidki-hermes.party/${i}`, { waitUntil: 'networkidle' });
        // Ensure light mode
        await page.evaluate(() => {
            const html = document.documentElement;
            html.classList.remove('dark');
            // Also the Slidev root element
            const slidevRoot = document.querySelector('.slidev-layout')?.parentElement;
            if (slidevRoot) slidevRoot.classList.remove('dark');
        });
        await page.waitForTimeout(800);
        await page.reload({ waitUntil: 'networkidle' });
        await page.waitForTimeout(1500);
        await page.screenshot({ path: path.join(outDir, `slide-${i.toString().padStart(2,'0')}-light.png`), fullPage: false });
        console.log(`Slide ${i} light`);
    }

    // DARK MODE
    console.log('=== DARK MODE ===');
    for (let i = 1; i <= 15; i++) {
        await page.goto(`https://jyu-theme.dezhidki-hermes.party/${i}`, { waitUntil: 'networkidle' });
        // Force dark mode
        await page.evaluate(() => {
            const html = document.documentElement;
            html.classList.add('dark');
        });
        await page.waitForTimeout(800);
        await page.reload({ waitUntil: 'networkidle' });
        await page.waitForTimeout(1500);
        await page.screenshot({ path: path.join(outDir, `slide-${i.toString().padStart(2,'0')}-dark.png`), fullPage: false });
        console.log(`Slide ${i} dark`);
    }

    await browser.close();
    console.log('Done!');
}

capture().catch(err => { console.error(err); process.exit(1); });
