import { chromium } from 'playwright'

const base = 'http://localhost:3315'
const outDir = 'C:/Users/bhale/AppData/Local/Temp/claude/e--GitHubProjects-solar-website-claude/3bf68e7b-0db2-4503-9819-0f283d33f2a5/scratchpad'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

const errors = []
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text())
})
page.on('pageerror', (err) => errors.push(String(err)))

await page.goto(base + '/', { waitUntil: 'networkidle' })
await page.screenshot({ path: `${outDir}/trans-1-home.png` })

// Click "About Us" nav link and grab frames mid-transition
await page.locator('a.nav-link:has-text("About Us")').click()
await page.waitForTimeout(90)
await page.screenshot({ path: `${outDir}/trans-2-mid.png` })
await page.waitForTimeout(400)
await page.screenshot({ path: `${outDir}/trans-3-settled.png` })

await page.waitForTimeout(300)
console.log('URL after nav:', page.url())
console.log('Console/page errors:', JSON.stringify(errors))

await browser.close()
