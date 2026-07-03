import { chromium } from 'playwright'

const base = 'http://localhost:3315'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

await page.goto(base + '/contact', { waitUntil: 'networkidle' })

await page.locator('a.nav-link:has-text("Home")').click()

const delays = [30, 60, 100, 150, 220, 320, 450]
let prev = 0
for (const d of delays) {
  await page.waitForTimeout(d - prev)
  prev = d
  const info = await page.evaluate(() => {
    const el = document.querySelector('main > div')
    if (!el) return 'no match'
    const cs = getComputedStyle(el)
    return `class="${el.className}" opacity=${cs.opacity} transform=${cs.transform}`
  })
  console.log(`t=${d}ms ${info}`)
}

await browser.close()
