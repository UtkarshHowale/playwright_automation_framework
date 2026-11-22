import{test, expect} from '@playwright/test'

test('Scroll down and up', async({page}) => {

    await page.goto('https://www.amazon.in/')

    await page.mouse.wheel(0, 1000)

    await page.waitForTimeout(5000)

    await page.mouse.wheel(0, -1000)

    await page.waitForTimeout(5000)

})

test('Scroll completely bottom of page', async({page}) =>{

    await page.goto('https://www.amazon.in/')

    await page.evaluate(()=>{

        window.scrollTo(0, document.body.scrollHeight)
    })

    await page.waitForTimeout(5000)
})

test('Drag and drop on the page', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    
    const source = await page.locator('#column-a')
    const target = await page.locator('#column-b')

    await source.dragTo(target)

    await page.waitForTimeout(5000)
})