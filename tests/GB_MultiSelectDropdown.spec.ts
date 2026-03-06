import { test, expect, Locator } from "@playwright/test";


test("Multi Select Drop down", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //1) Select Option from the Drop Down ( 4 ways)

    await page.locator("#colors").selectOption(['Red','Blue','Green']);        // Using visible text
    await page.locator("#colors").selectOption(['red','green','white']);       // Using value attribute
    await page.locator("#colors").selectOption([ {label:'Red'}, {label:'Green'}, {label:'Yellow'} ]);   // Using label
    await page.locator("#colors").selectOption([ {index:0},{index:2},{index:4} ]);   // Using index


    //2) Check Number of Options in the Dropdown(count)

    const DropdownOptions: Locator = page.locator('#colors>option');
    await expect(DropdownOptions).toHaveCount(7);

    //3) Check an Option Present in the Dropdown

    const OptionsText: string[] = (await DropdownOptions.allTextContents()).map(text => text.trim());
    console.log(OptionsText)

    expect(OptionsText).toContain('Green'); // Check if the array contains "Green"


    //4) Printing Options from the Drop Down

    for (const option of OptionsText) {
        console.log(option);
    }

    await page.waitForTimeout(5000);
})