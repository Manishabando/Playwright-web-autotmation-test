const {test, expect} = require('@playwright/test');

test("AutoComplete test", async function({page}) {
   
    await page.goto("https://www.amazon.in/")

    await page.locator("//input[@role='searchbox']").fill("iPhone 14")
    
    await page.waitForSelector("//div[@class='left-pane-results-container']")

    await page.keyboard.press("ArrowDown")

        await page.keyboard.press("ArrowDown")
    
        
        await page.keyboard.press("Enter")
    
    });