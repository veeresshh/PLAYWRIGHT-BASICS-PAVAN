import { test, expect } from '@playwright/test';

test('Pagination Table Lab - Print all data from paginated table', async ({ page }) => {

  // Navigate to the Page

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Get all Pagination Links

  const Pages = await page.locator('ul#pagination li').all();
  console.log("Number of Pages: ", Pages.length);

  for (let i = 0; i < Pages.length; i++) {
    await Pages[i].click(); // clicking on the page

    // Get all Table Rows on the Page

    const Rows = await page.locator('table#productTable tbody tr').all();

    //Printing all the rows from the table

    for (const Row of Rows) {
      const RowText = await Row.innerText();
      console.log(RowText.trim());
    }
    await page.waitForTimeout(3000);
    

    //Select Check Boxes For all the Rows from the Table

    for (let i = 0; i < Rows.length; i++) {

      const id = await Rows[i].locator('td').nth(0).innerText();
      const name = await Rows[i].locator('td').nth(1).innerText();
      const price = await Rows[i].locator('td').nth(2).innerText();
      await Rows[i].locator('td').nth(3).locator('input').click(); // clicking on checkbox
      console.log(id, '\t', name, '\t', price);

    }

    await page.waitForTimeout(3000);

  }

});
