import { test, expect } from '@playwright/test';

test('Codegen test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByText('A H', { exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: 'A H' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});