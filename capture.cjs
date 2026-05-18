const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function captureSlides() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();

    const outDir = '/home/hermes/jyu-slidev-theme/screenshots';
    fs.mkdirSync(outDir, { recursive: true });

    // Light mode screenshots
    console.log('=== LIGHT MODE ===');
    for (let i = 1; i <= 15; i++) {
        await page.goto(`https://jyu-theme.dezhidki-hermes.party/${i}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(2000); // wait for fonts/styles
        await page.screenshot({ path: path.join(outDir, `slide-${i}-light.png`), fullPage: false });
        console.log(`Slide ${i} light captured`);
    }

    // Dark mode screenshots
    console.log('=== DARK MODE ===');
    for (let i = 1; i <= 15; i++) {
        await page.goto(`https://jyu-theme.dezhidki-hermes.party/${i}?dark=true`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(2000);
        // Click dark mode toggle if needed - check if page is already dark
        const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
        if (!isDark) {
            await page.click('button[title*="Switch to dark mode"]');
            await page.waitForTimeout(500);
        }
        await page.screenshot({ path: path.join(outDir, `slide-${i}-dark.png`), fullPage: false });
        console.log(`Slide ${i} dark captured`);
    }

    await browser.close();
    console.log('Done!');
}

captureSlides().catch(err => {
    console.error(err);
    process.exit(1);
});
