import { test, expect } from '@playwright/test';


test('Playwright Assertions Demo', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  // 1. Auto-Retrying Assertion (Automatically Retries Until it Passes or Times Out)

  await expect(page).toHaveURL("https://demowebshop.tricentis.com/");


  // Auto-Retry: Waits for the Element to be Visible and Have the Expected Text

  await expect(page.locator('text=Welcome to our store')).toBeVisible();
  await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText('Featured products');


  // 2. Non-Retrying Assertion (Executes Immediately, No Retry)

  const Title = await page.title();
  expect(Title.includes('Demo Web Shop')).toBeTruthy(); // No Auto Retry

  const WelcomeText = await page.locator('text=Welcome to our store').textContent();
  expect(WelcomeText).toContain('Welcome');            // No Auto Retry


  // 3. Negating (Negative Assertion) Matcher ( Applicable For Both Auto-Retrying & Non-Retrying Assertions)

  await expect(page.locator('text=Welcome to our store')).not.toBeVisible(); // Auto-Retry
  expect(WelcomeText).not.toContain('Welcome');       // No Auto Retry

  await page.waitForTimeout(5000);

});
