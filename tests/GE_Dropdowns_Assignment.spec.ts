import { test, expect, Locator } from '@playwright/test';

test('Product sort and print lowest/highest price with names', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://www.bstackdemo.com/');
  await page.setViewportSize({ width: 1280, height: 720 });

  // Locate the "Order by" dropdown using CSS selector and select "Lowest to highest"

  const OrderByDropdown = page.locator('div.sort>select');
  await expect(OrderByDropdown).toBeVisible(); // Assert dropdown is visible
  await expect(OrderByDropdown).toBeEnabled(); // Assert dropdown is enabled

  await OrderByDropdown.selectOption({ label: 'Lowest to highest' });

  // Wait for sorting to reflect

  await page.waitForTimeout(3000);

  // Get all product price and name elements using CSS
  
  const PriceElements: Locator = page.locator('div.val');
  const NameElements: Locator = page.locator('p.shelf-item__title');

  const Prices: string[] = await PriceElements.allTextContents();
  const Names: string[] = await NameElements.allTextContents();

  expect(Prices.length).toBe(Names.length); // Assert that prices and names count are equal

  console.log('Printing Product Names along with their Prices.......');
  for (let i = 0; i < Names.length; i++) {
    console.log(`${Names[i]} : ${Prices[i]}`);
  }

  console.log(`Lowest Priced Product: ${Names[0]} : ${Prices[0]}`);
  console.log(`Highest Priced Product: ${Names[Names.length - 1]} : ${Prices[Prices.length - 1]}`);
});
