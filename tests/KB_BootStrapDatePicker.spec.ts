import { test, expect } from '@playwright/test';

test('Booking.com Date Picker Test - Check-in and Check-out', async ({ page }) => {

  await page.goto('https://www.booking.com/');

  // Click on the date picker field to open calendar

  await page.getByTestId('searchbox-dates-container').click();

  // Check-in Date Selection 

  let CheckinYear: string = "2026";
  let CheckinMonth: string = "June";
  let CheckinDay: string = "20";

  // Navigate through the calendar to find the desired check-in month and year

  while (true) {

    const CheckInMonthYear = await page.locator("h3[aria-live='polite']").nth(0).innerText();

    const CurrentMonth = CheckInMonthYear.split(" ")[0];   
    const CurrentYear = CheckInMonthYear.split(" ")[1];

    if (CurrentMonth === CheckinMonth && CurrentYear === CheckinYear) {
      break;
    }
    else {
      await page.locator('button[aria-label="Next month"]').click();
    }
  }

  // Select the specific check-in date

  let AllDates = await page.locator('table.b8fcb0c66a tbody').nth(0).locator('td').all();

  let CheckinDateSelected = false;

  for (let Date of AllDates) {

    const DateText = await Date.innerText();

    if (DateText === CheckinDay) {

      await Date.click();

      CheckinDateSelected = true;
      
      break;
    }
  }

  // Assertion to confirm check-in date was selected

  expect(CheckinDateSelected).toBeTruthy();


  //Check-out Date Selection

  let CheckoutYear: string = "2026";
  let CheckoutMonth: string = "July";
  let CheckoutDay: string = "25";

  // Navigate to the required check-out month and year

  while (true) {

    const CheckOutMonthYear = await page.locator("h3[aria-live='polite']").nth(1).innerText();

    const CurrentMonth = CheckOutMonthYear.split(" ")[0];
    const CurrentYear = CheckOutMonthYear.split(" ")[1];

    if (CurrentMonth === CheckoutMonth && CurrentYear === CheckoutYear) {
      break;
    } else {
      await page.locator('button[aria-label="Next month"]').click();
    }
  }

  // Select the specific check-out date

  AllDates = await page.locator('table.b8fcb0c66a tbody').nth(1).locator('td').all();

  let CheckoutDateSelected = false;

  for (let Date of AllDates) {

    const DateText = await Date.innerText();

    if (DateText === CheckoutDay) {

      await Date.click();

      CheckoutDateSelected = true;

      break;
    }
  }

  // Assertion to confirm check-out date was selected
  
  expect(CheckoutDateSelected).toBeTruthy();

  await page.waitForTimeout(5000); // just to visually observe the result during test run (optional)

});
