import { test, expect, Locator, Page } from "@playwright/test"

async function SelectDate(TargetYear: string, TargetMonth: string, TargetDate: string, page: Page, IsFuture: boolean) {

    while (true) {

        const CurrentMonth = await page.locator('.ui-datepicker-month').textContent();
        const CurrentYear = await page.locator('.ui-datepicker-year').textContent();

        if (CurrentMonth === TargetMonth && CurrentYear === TargetYear) {
            break;
        }

        if (IsFuture) {

            await page.locator('.ui-datepicker-next').click(); //Future 
        }
        else {
            await page.locator('.ui-datepicker-prev').click(); //Past 
        }
    }


    const AllDates = await page.locator(".ui-datepicker-calendar td").all();

    for (let DATES of AllDates) {
        const DateText = await DATES.innerText();
        if (DateText === TargetDate) {
            await DATES.click()
            break;
        }

    }
}



test("JQuery datepicker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const DateInput: Locator = page.locator('#datepicker');
    expect(DateInput).toBeVisible();

    //Appraoch 1: using fill() method

    DateInput.fill("06/20/2025");   //mm/dd/yyyy

    // Appraoch 2: using date picker

    await DateInput.click(); //opens the date picker

    const Year = '2024';
    const Month = 'June';
    const Date = '15';


    SelectDate(Year, Month, Date, page, false); 

    const ExpectedDate = '06/15/2024'; 
    await expect(DateInput).toHaveValue(ExpectedDate);


    await page.waitForTimeout(5000);

})