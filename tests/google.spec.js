const { test, expect } = require('@playwright/test');

test("Verify application title", async ({ page }) => {
    await page.goto("https://www.google.com/", { timeout: 60000 });
    await expect(page).toHaveTitle("Google");
    await expect(page.getByRole("link", { name: "Gmail" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Images" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Google Search" })).toBeVisible();

    
})