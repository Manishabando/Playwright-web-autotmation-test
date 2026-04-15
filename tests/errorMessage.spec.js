 const {test,expect} =require('@playwright/test');

 test("InValid test", async function({page})
 {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.getByPlaceholder("Username").fill("Admin")
    
    await page.getByPlaceholder("Password").fill("invalid123")

    await page.getByRole("button", { name: "Login" }).click()

    const errorMessage=await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")
    
    console.log("Error Message: " + await errorMessage.textContent())

    await expect(errorMessage).toHaveText("Invalid credentials")

    await expect(errorMessage).toBeTruthy()

}) ;
