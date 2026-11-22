import {test, expect} from '@playwright/test'

test('file upload scenario', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.locator('#file-upload').setInputFiles("C:\\Users\\UTKARSH\\Downloads\\hqdefault.jpg")

    await page.locator('#file-submit').click()

    expect(page.getByText('File Uploaded!')).toHaveText('File Uploaded!')
})