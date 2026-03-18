  const {test,expect} =require('@playwright/test');

   test("Valid test", async function({page})
 {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.locator("//input[@name='Username']").fill("Admin")  
    
    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole("button", { name: "Login" }).click()

    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible()

    await page.getByAltText("profile picture").click()

    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/) 
         
}) ;

