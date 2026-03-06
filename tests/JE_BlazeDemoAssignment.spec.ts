import { test, expect } from '@playwright/test';

test('BlazeDemo Flight Booking Flow - Select Lowest Price Flight', async ({ page }) => {

  // 1. Navigate to BlazeDemo Homepage

  await page.goto('https://blazedemo.com/');


  // 2. Select departure city: Boston

  await page.locator('select[name="fromPort"]').selectOption('Boston');


  // 3. Select destination city: London

  await page.locator('select[name="toPort"]').selectOption('London');


  // 4. Click on "Find Flights"

  await page.locator('input[type="submit"]').click();


  // 5. Count number of rows (flights) in the table

  const Rows = page.locator('table.table tbody tr');
  const RowCount = await Rows.count();
  console.log('Number of flight rows: ', RowCount);
  expect(RowCount).toBeGreaterThan(0); 


  // 6. Capture all prices into an array

  const Prices: string[] = [];

  for (let i = 0; i < RowCount; i++) {
    const Price = await Rows.nth(i).locator('td').nth(5).innerText(); // 6th column (index 5)
    Prices.push(Price);
  }


  // 7. Log and sort the prices

  console.log('Flight Prices:', Prices);
  const SortedPrices = [...Prices].sort(); // String sort
  const LowestPrice = SortedPrices[0];
  console.log('Lowest Price:', LowestPrice);
  expect(LowestPrice).toBeDefined(); // Assert: price is found


  // 8. Find row with lowest price and click "Choose This Flight"

  for (let i = 0; i < RowCount; i++) {
    const Price = await Rows.nth(i).locator('td').nth(5).innerText();
    if (Price === LowestPrice) {
      await Rows.nth(i).locator('td input[type="submit"]').click();
      break;
    }
  }


  // 9. Fill passenger details on the purchase page

  await page.locator('#inputName').fill('John');
  await page.locator('#address').fill('1403 American Beauty Ln');
  await page.locator('#city').fill('Columbus');
  await page.locator('#state').fill('OH');
  await page.locator('#zipCode').fill('43240');
  await page.locator("#cardType").selectOption("American Express")
  await page.locator('#creditCardNumber').fill('6789067345231267');
  await page.locator('#creditCardMonth').fill('10');
  await page.locator('#creditCardYear').fill('2024');
  await page.locator('#nameOnCard').fill('John Canedy');


  // Click on Purchase Flight

  await page.locator('input[value="Purchase Flight"]').click();


  // 10. Validate success message

  const ConfirmationText = await page.locator('h1').textContent();
  console.log('Confirmation Message:', ConfirmationText);
  expect(ConfirmationText).toContain('Thank you for your purchase');

  await page.waitForTimeout(3000);

});
