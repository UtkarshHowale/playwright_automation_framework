import {test, expect} from '@playwright/test'

test('Working with multiple tabs', async({browser}) => {

    const browserConext = await browser.newContext()

    const mainPage = await browserConext.newPage()

    await mainPage.goto('https://freelance-learn-automation.vercel.app/login')


    // Wait until both promises got resolved
    const [newPage] = await Promise.all([

        browserConext.waitForEvent('page'),

        mainPage.locator("//a[contains(@href, 'facebook.com')]").first().click()

    ])

    await newPage.getByText('Email address or phone number').fill('hello@gmail.com')
    await newPage.waitForTimeout(2000)

    await newPage.close()

    await mainPage.getByPlaceholder('Enter Email').fill('test@gmail.com')
    await mainPage.waitForTimeout(2000)

})