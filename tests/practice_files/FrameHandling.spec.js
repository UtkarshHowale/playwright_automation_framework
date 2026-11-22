import {test, expect} from '@playwright/test'

test('Handle normal i-frame', async({page}) => {

    await page.goto('https://selectorshub.com/iframe-scenario/')

    const iframe =  await page.frameLocator('#pact1').first()

    await iframe.getByPlaceholder('First Crush').fill('Hello')
})

test('Handle nested i-frame', async({page}) => {

    await page.goto('https://selectorshub.com/iframe-scenario/')

    const outerframe = await page.frameLocator('#pact1').first().frameLocator('#pact2')
    await outerframe.getByPlaceholder('Current Crush Name').fill('Bye')


})