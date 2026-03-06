import { test, expect, Page } from '@playwright/test';

async function SelectDate(page: Page, TargetYear: string, TargetMonth: string, TargetDate: string) {

  while (true) {

    const CurrentMonth = await page.locator('span.ui-datepicker-month').innerText();
    const CurrentYear = await page.locator('span.ui-datepicker-year').innerText();

    if (CurrentMonth === TargetMonth && CurrentYear === TargetYear) {
      break;
    }
    else {
      await page.click('a.ui-datepicker-next'); // click next
    }
  }

  const AllDates = page.locator('table.ui-datepicker-calendar tbody td a');
  const Count = await AllDates.count();

  for (let i = 0; i < Count; i++) {
    const DateText = await AllDates.nth(i).innerText();
    if (DateText === TargetDate) {
      await AllDates.nth(i).click();
      break;
    }
  }


}

test('IRCTC Date Picker Demo', async ({ page }) => {
  await page.goto('https://www.irctc.co.in/nget/train-search');

  const DateInput = page.locator('#jDate span input');
  await DateInput.click();

  const TargetYear = '2025';
  const TargetMonth = 'June';
  const TargetDate = '10';

  await SelectDate(page, TargetYear, TargetMonth, TargetDate);

  // Assert the selected date is reflected in the input field 

  const SelectedDate = await DateInput.inputValue();
  expect(SelectedDate).toContain('10');

  // Other way to Verify selected date is correctly filled in the input field

  const ExpectedDateString = '10/06/2025';
  await expect(DateInput).toHaveValue(ExpectedDateString); 

});
