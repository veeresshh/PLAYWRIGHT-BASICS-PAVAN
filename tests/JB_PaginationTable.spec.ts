import { test, expect, Locator } from '@playwright/test';

test("Read Data From All the Table Pages", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    let HasMorePages = true;

    while (HasMorePages) {

        const Rows = await page.locator("#example tbody tr").all();

        for (let Row of Rows) {

            console.log(await Row.innerText());

        }

        await page.waitForTimeout(2000);

        const NextButton: Locator = page.locator("button[aria-label='Next']");

        const IsDisabled = await NextButton.getAttribute('class'); // dt-paging-button disabled next

        if (IsDisabled?.includes('disabled')) {

            HasMorePages = false;
        }

        else {

            await NextButton.click()
        }
    }

});


test("Filter the Rows and Check the Rows Count", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const Dropdown: Locator = page.locator("#dt-length-0");
    await Dropdown.selectOption({label: '25'});

    //Appraoch 1

    const Rows = await page.locator("#example tbody tr").all();
    expect(Rows.length).toBe(25); //assertion

    //Appraoch2
    
    const Rows2 = page.locator("#example tbody tr");
    await expect(Rows2).toHaveCount(25);
})




test("Search for Specific Data in a Table", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const SearchBox: Locator = page.locator('#dt-search-0');
    await SearchBox.fill('Paul Byrd');

    await page.waitForTimeout(5000);
    const Rows = await page.locator("#example tbody tr").all();

    if (Rows.length >= 1) {

        let MatchFound = false;

        for (let Row of Rows) {

            const Text = await Row.innerText();

            if (Text.includes('Paul Byrd')) {

                console.log("Record Exists - found");

                MatchFound = true;

                break;

            }

        }
        
        expect(MatchFound).toBeTruthy();
    }

    else {

        console.log("No Rows found with search text")

    }


})