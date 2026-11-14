import {test, expect} from '@playwright/test'
import { chromium } from '@playwright/test'

test('Open applications on separate browsers', async()=>{

    // Lounch browser
    const browser = await chromium.launch();

    // Create first browser context
    const browserContext1 = await browser.newContext()

    // Create page for first browser conext
    const page1 = await browserContext1.newPage()

    await page1.goto('https://www.amazon.in/')

    const titleForPage1 = await page1.title()
    console.log(titleForPage1)
    expect(titleForPage1).toContain('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')

    await page1.waitForTimeout(5000)


    // Create second browese context
    const browserContext2 = await browser.newContext()

    // Create page for second browser context
    const page2 = await browserContext2.newPage()
    await page2.goto('https://www.flipkart.com/')
    const titleForPage2 = await page2.title()
    console.log(titleForPage2)
    expect(titleForPage2).toBe('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

    await page2.waitForTimeout(5000)

})