import { test, expect, Locator } from '@playwright/test';

test("Verify Chrome CPU load in dynamic table", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/dynamic-table");

    const Table: Locator = page.locator("table.table tbody");
    await expect(Table).toBeVisible();

    //Select all the rows, then find number of rows

    const Rows: Locator[] = await Table.locator("tr").all();
    console.log("Number of rows in a table:", Rows.length);
    expect(Rows).toHaveLength(4);


    //Step 1: For Chrome process get value of CPU load.

    // Read each row o check Chrome presence

    let CPULoad = '';

    for (const Row of Rows) {

        const ProcessName: string = await Row.locator("td").nth(0).innerText();

        if (ProcessName === "Chrome") {

            CPULoad = await Row.locator("td",{hasText:'%'}).innerText();

            console.log("CPU Load of Chrome:", CPULoad); //2.9%
            
            break;
        }
    }

    //Step2: Compare it with value in the yellow label.
    
    let YellowBoxText: string = await page.locator("#chrome-cpu").innerText();

    console.log("Chrome CPU load from yellow box:", YellowBoxText);

    if (YellowBoxText.includes(CPULoad)) {

        console.log("CPU load of Chrome is equal.");

    } else {

        console.log("CPU load of Chrome is Not equal.");
    }

    expect(YellowBoxText).toContain(CPULoad);

    await page.waitForTimeout(5000);

})