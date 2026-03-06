import { test, expect } from '@playwright/test';

test('Drag and Drop demo from Guru99', async ({ page }) => {

  // Navigate to the page
  
  await page.goto('https://demo.guru99.com/test/drag_drop.html');

  // Locate source and target elements using CSS selectors

  const From1 = page.locator('#credit2 a');         // BANK
  const To1 = page.locator('#bank li');             // Debit Side

  const From2 = page.locator('#credit1 a');         // SALES
  const To2 = page.locator('#loan li');             // Credit Side

  const From3 = page.locator('#fourth a').first();  // 500 (1st)
  const To3 = page.locator('#amt7 li');             // Debit Amount

  const From4 = page.locator('#fourth a').nth(1);   // 500 (2nd)
  const To4 = page.locator('#amt8 li');             // Credit Amount

  // Perform Drag and Drop

  await From1.dragTo(To1);
  await From2.dragTo(To2);
  await From3.dragTo(To3);
  await From4.dragTo(To4);

  // Assert the "Perfect!" message is displayed

  const PerfectText = page.locator('a:has-text("Perfect!")');
  await expect(PerfectText).toBeVisible();

  await page.waitForTimeout(5000);
});
