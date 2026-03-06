import { test, expect } from '@playwright/test';

test('Date Range Picker ', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');


  await page.locator('#start-date').fill('2025-10-20'); //YYYY-MM-DD
  await page.locator('#end-date').fill('2026-09-05'); //YYYY-MM-DD

  await page.waitForTimeout(5000);

  // Click on Submit button

  await page.locator('.submit-btn').click();

  // Assertion: Check if submission resulted in any visible success message or confirmation

  const SuccessMessage = page.locator('#result');
  await expect(SuccessMessage).toBeVisible();

  console.log("string:", await page.locator('#start-date').inputValue());
  console.log("ending:", await page.locator('#end-date').inputValue());

  expect(await page.locator('#start-date').inputValue()).toBe('2025-10-20');
  expect(await page.locator('#end-date').inputValue()).toBe('2026-09-05');

});
