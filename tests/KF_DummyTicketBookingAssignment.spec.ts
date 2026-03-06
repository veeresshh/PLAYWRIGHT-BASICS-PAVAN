import { test, expect, Page } from '@playwright/test';

async function SelectDateOfBirth(page: Page, BirthYear: string, BirthMonth: string, BirthDate: string) {

    // Select Year

    await page.locator('select[data-handler="selectYear"]').selectOption(BirthYear);

    // Select Month

    await page.locator('select.ui-datepicker-month').selectOption(BirthMonth);

    // Select Date

    const DateCells = await page.locator('table.ui-datepicker-calendar td a').all();
    for (const Cell of DateCells) {
        if (await Cell.textContent() === BirthDate) {
            await Cell.click();
            break;
        }
    }
}

async function SelectDate(page: Page, RequiredYear: string, RequiredMonth: string, RequiredDate: string) {

    // Select Year

    await page.locator('select[data-handler="selectYear"]').selectOption(RequiredYear);

    // Select Month

    await page.locator('select[aria-label="Select month"]').selectOption(RequiredMonth);

    // Select Date

    const DateCells = await page.locator('table.ui-datepicker-calendar td a').all();
    for (const Cell of DateCells) {
        if (await Cell.textContent() === RequiredDate) {
            await Cell.click();
            break;
        }
    }
}

test('Dummy Ticket Booking', async ({ page }) => {

    // Launch the url

    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');

    // Assert page title

    await expect(page).toHaveTitle(/Dummy ticket/);

    // Choose the correct option: Dummy ticket for Visa Application radio option

    await page.locator('#product_549').check();
    await expect(page.locator('#product_549')).toBeChecked();

    // Passenger details //

    // Enter first and last name

    await page.locator('[name="travname"]').fill('Akash');
    await page.locator('#travlastname').fill('Ratore');

    // Select Date Of Birth

    const BirthYear = "2001";
    const BirthMonth = "Mar";
    const BirthDate = "2";
    await page.locator('#dob').click();
    await SelectDateOfBirth(page, BirthYear, BirthMonth, BirthDate);

    // Verify date was selected

    const DOBValue = await page.locator('#dob').inputValue();
    expect(DOBValue).not.toBe('');


    // Select sex

    await page.locator('#sex_1').check();
    await expect(page.locator('#sex_1')).toBeChecked();

    // Travel Details //

    // Select trip

    await page.locator('#traveltype_1').check();
    await expect(page.locator('#traveltype_1')).toBeChecked();
    await page.locator('[name="fromcity"]').fill('Toronto');
    await page.locator('[name="tocity"]').fill('Mumbai');

    // Select departure date

    const RequiredYear = "2025";
    const RequiredMonth = "Nov";
    const RequiredDate = "25";
    await page.locator('#departon').click();
    await SelectDate(page, RequiredYear, RequiredMonth, RequiredDate);

    // Verify departure date was selected

    const DepartValue = await page.locator('#departon').inputValue();
    expect(DepartValue).not.toBe('');

    // Additional information

    await page.locator('#notes').fill('Need visa as soon as possible');
    await expect(page.locator('#notes')).toHaveValue('Need visa as soon as possible');

    // Delivery options //

    // Purpose of ticket

    await page.locator('#select2-reasondummy-container').click();
    await page.locator('.select2-results li:first-child').click();

    // Select appointment date

    const ApptYear = "2025";
    const ApptMonth = "Dec";
    const ApptDate = "10";
    await page.locator('#appoinmentdate').click();
    await SelectDate(page, ApptYear, ApptMonth, ApptDate);

    // Verify appointment date was selected

    const ApptValue = await page.locator('#appoinmentdate').inputValue();
    expect(ApptValue).not.toBe('');

    // Notification

    await page.locator('#deliverymethod_1').check();
    await expect(page.locator('#deliverymethod_1')).toBeChecked();

    // Billing Details //

    await page.locator('#billname').fill('Akash Rathore');
    await page.locator('[name="billing_phone"]').fill('+12345678956');
    await page.locator('#billing_email').fill('abc.123@gmail.com');

    // Select country

    await page.locator('#select2-billing_country-container').click();
    await page.locator('.select2-results li:has-text("Canada")').click();

    await page.locator('#billing_address_1').fill('123 Scott Street');
    await page.locator('[name="billing_city"]').fill('Niagara Falls');

    // Select state

    await page.locator('#select2-billing_state-container').click();
    await page.locator('.select2-results li:has-text("Ontario")').click();

    await page.locator('#billing_postcode').fill('L2C 6M1');

    // Verify billing details were filled

    await expect(page.locator('#billname')).toHaveValue('Akash Rathore');
    await expect(page.locator('[name="billing_phone"]')).toHaveValue('+12345678956');
    await expect(page.locator('#billing_email')).toHaveValue('abc.123@gmail.com');
    await expect(page.locator('#select2-billing_country-container')).toHaveText('Canada');
    await expect(page.locator('#billing_address_1')).toHaveValue('123 Scott Street');
    await expect(page.locator('[name="billing_city"]')).toHaveValue('Niagara Falls');
    await expect(page.locator('#select2-billing_state-container')).toHaveText('Ontario');
    await expect(page.locator('#billing_postcode')).toHaveValue('L2C 6M1');

    //Verify Product details table 

    const ProductName = page.locator('.product-details');
    await expect(ProductName).toHaveText("Dummy ticket for Visa Application");

    const ProductPrice = page.locator('.shop_table.woocommerce-checkout-review-order-table tfoot tr:nth-child(2) td');
    await expect(ProductPrice).toHaveText("₹1,200");

    //Place order
    
    await page.locator('#place_order').click();


});