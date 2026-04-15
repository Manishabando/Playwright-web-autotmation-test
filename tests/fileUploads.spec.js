const{test,expect} =require('@playwright/test')
const path = require('path')

test("File upload test", async ({page}) => {
  // Test implementation
  await page.goto("https://the-internet.herokuapp.com/upload")
  
  const file1 = path.resolve(__dirname, '../uploads/file1.pdf');
  await page.locator("#file-upload").setInputFiles(file1);

  await page.locator("#file-submit").click()
  expect(await page.locator("//h3")).toHaveText("File Uploaded!")


});