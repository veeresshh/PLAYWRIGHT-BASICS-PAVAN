
import { test, expect } from '@playwright/test';

//Only

test.only('First Test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//Skip

test.skip('Second Test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//Skip Based on The Condition

test('Third Test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'This Test  is Skipped if Browser is Firefox');
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//Fail

test.fail('Fourth Test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//Fixme - If Test is Partially Completed we can skip the Testcase

test.fixme('Fifth Test', async ({ page }) => {
  await page.goto('https://www.google.com/');
});


//Slow

test('Sixth Test', async ({ page }) => {
  test.slow();
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});
