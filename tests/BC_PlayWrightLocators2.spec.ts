
import { test, expect, Locator } from '@playwright/test';

test('Built-in Locators', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // page.getByAltText()

  let Logo: Locator = page.getByAltText('company-branding');
  await expect(Logo).toBeVisible();


  // page.getByPlaceholder()

  await page.getByPlaceholder('Username').fill("Admin");
  await page.getByPlaceholder('Password').fill("admin123");


  // page.getByRole()

  await page.getByRole('button', { name: 'Login' }).click();


  // page.getByText()
  await expect(page.getByText("manda user")).toBeVisible(); //user can be changed. Please check manually once.

});