/*
1. Run all sanity tests:
    npx playwright test tests/tagging.spec.ts --grep "@sanity" 

2. Run all regression tests:
    npx playwright test tests/tagging.spec.ts --grep "@regression"

3. Run tests which belongs to both sanity & regression

npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

4. Run tests belongs to either sanity or regression.
    npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression"

5. Run sanity tests which does not belongs to regression (special case)
    npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"
*/

import { test, expect } from '@playwright/test';


test('Check Title of the Home Page', { tag: '@sanity' }, async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


test('Check Navigation to Store Page', { tag: '@regression' }, async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator("text='Store'").click();
  await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
});


test('Check Top Recommendations', { tag: ['@sanity', '@regression'] }, async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator("text='Store'").click();
  await expect(page.locator("text='Our Top Recommendations.'")).toHaveText('Our Top Recommendations.');
});


