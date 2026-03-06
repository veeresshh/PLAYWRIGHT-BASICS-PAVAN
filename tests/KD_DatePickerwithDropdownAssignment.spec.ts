import { test, expect, Page } from '@playwright/test';

// Reusable function to select a date in the jQuery UI date picker
async function SelectDate(page: Page, TargetYear: string, TargetMonth: string, TargetDate: string) {
  // Select the year
  const YearDropdown = page.locator('select.ui-datepicker-year');
  await YearDropdown.selectOption({ label: TargetYear });

  // Select the month
  const MonthDropdown = page.locator('select.ui-datepicker-month');
  await MonthDropdown.selectOption({ label: TargetMonth });

  // Click on the desired date
  const AllDates = await page.locator('table.ui-datepicker-calendar a').all();

  for (let Date of AllDates) {
    const DateText = await Date.innerText();
    if (DateText === TargetDate) {
      await Date.click();
      break;
    }
  }

}


test('Date Picker with Dropdowns - Select Date', async ({ page }) => {
 
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Click on the input field to open the date picker

  const DateInput = page.locator('#txtDate');
  await DateInput.click();

  // Desired date

  const Year = '2026';
  const Month = 'May';
  const Date = '15';

  // Select the date using helper

  await SelectDate(page, Year, Month, Date);

  // Assert that the correct date is selected in the input box

  await expect(DateInput).toHaveValue('15/05/2026');
});
