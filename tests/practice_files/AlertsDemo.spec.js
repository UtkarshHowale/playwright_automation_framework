import {test, expect} from '@playwright/test'

// Handle normal accept alert
test('Accept the alert', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // Work as listner - if alert comes we are storing the alert in alertDialog variable
    page.on('dialog', async(alertDialog)=>{

        expect(alertDialog.type()).toContain('alert')

        expect(alertDialog.message()).toContain('I am a JS Alert')

        await alertDialog.accept()

    })

    await page.getByRole('button', {name: 'Click for JS Alert'}).click()

})

// Handle confrim alert
test('Confrim or Console the alert', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // Work as listner - if alert comes we are storing the alert in alertDialog variable
    page.on('dialog', async(alertDialog)=>{

        expect(alertDialog.type()).toContain('confirm')

        expect(alertDialog.message()).toContain('I am a JS Confirm')

        await alertDialog.dismiss()

    })

    await page.getByRole('button', {name: 'Click for JS Confirm'}).click()

})

// Handle prompt alert
test('Prompt alert handling', async({page}) =>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    // Work as listner - if alert comes we are storing the alert in alertDialog variable
    page.on('dialog', async(alertDialog)=>{

        expect(alertDialog.type()).toContain('prompt')

        expect(alertDialog.message).toBe('I am a JS prompt')

        await alertDialog.accept('Hello')

        await page.getByRole('button', {name: 'Click for JS Prompt'}).click()

    })

})