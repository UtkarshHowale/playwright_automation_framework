import {test, expect} from '@playwright/test'

test('Handle header dropdown menu',{tag: '@regression'} , async({page})=>{

    // Navigate to Bajaj Finserv website
    await page.goto('https://www.bajajfinserv.in/')

    // Enter product name in search box
    await page.getByPlaceholder('Search Bajaj Finance').pressSequentially('Hero Bikes', {delay: 100})

    // Select Hero Bikes from search suggestions
    await page.locator('.suggestion_items').filter({hasText:'Hero Bikes'}).click()

    // Locate all product prices
    const prices = page.locator('.new-emi-price')

    // Wait until the first price becomes visible
    await expect(prices.first()).toBeVisible()

    // Extract text of all prices
    const getAllPrices = await prices.allInnerTexts()
    console.log(getAllPrices)

    const result = []

    // Iterate through each price in the array
    for(const price of getAllPrices){

        let newPrice = ''

        // Iterate through each character of the price
        for(const ch of price){

            // Skip the rupee symbol
            if(ch !== '₹'){

                newPrice = newPrice + ch
            }
        }

        // Convert price string into number and store it in array
        result.push(Number(newPrice))
    }

    console.log(result)

    // Initialize largest and smallest price
    let largestPrice = Number.MIN_VALUE
    let smallestPrice = Number.MAX_VALUE

    // Iterate through the numeric price array
    for(const price of result){

        // Find the largest price
        if(price > largestPrice){

            largestPrice = price
        }
        
        // Find the smallest price
        if(price < smallestPrice){

            smallestPrice = price
        }

    }

    // Print largest and smallest prices
    console.log('Largest price: ', largestPrice)
    console.log('Smallest price: ', smallestPrice)
})
