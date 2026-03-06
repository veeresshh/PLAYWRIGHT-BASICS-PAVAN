import { test, expect } from '@playwright/test';

test('Find A Book in the page', async ({ page }) => {
  await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

  test.slow(); // Set timeout for a single test Easy way to triple the default timeout i.e. 30 secs(30000  ms)
  //test.setTimeout(80000); // 8 secs //Set timeout for a single test

  let BookFound = false;
  let PreviousHeight = 0;

  while (true) {

    // Get All Book Titles Currently Loaded on the Page

    const Titles = await page.locator('#productsDiv h3').allTextContents();

    // Check if the Target Book is in the List

    if (Titles.includes('The Blue Eye')) {

      console.log('Book Found!');

      BookFound = true;

      expect(BookFound).toBeTruthy();

      break;
    }

    // Scroll to the Bottom

    await page.evaluate(() => {

      window.scrollTo(0, document.body.scrollHeight);

    });

    // Wait for New Content to Load

    await page.waitForTimeout(2000);

    // Get Current Scroll Height

    const CurrentHeight = await page.evaluate(() => {

      return document.body.scrollHeight;

    });

    console.log("==============================")
    console.log(`Previous height: ${PreviousHeight}`);
    console.log(`Current height: ${CurrentHeight}`);

    // Check if end of Page is Reached

    if (CurrentHeight === PreviousHeight) {

      break;
    }

    PreviousHeight = CurrentHeight;
  }

  console.log('*********  Reached end of page  ********');

  if (!BookFound) {

    console.log('Book Not Found!');
  }


});