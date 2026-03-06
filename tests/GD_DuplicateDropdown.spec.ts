import { test, expect, Locator } from "@playwright/test";


test("Verify dropdown contains duplicates", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //const dropDownOptions:Locator=page.locator('#colors>option');  // having duplicates

    const DropDownOptions: Locator = page.locator('#animals>option');  // not having duplicates

    const OptionsText: string[] = (await DropDownOptions.allTextContents()).map(text => text.trim());


    const MySet = new Set<string>();    // Set -    Duplicates not allowed

    const Duplicates: string[] = [];    // Array  - Duplicates allowed


    for (const text of OptionsText) {

        if (MySet.has(text)) {

            Duplicates.push(text);
        }
        else {

            MySet.add(text);
        }
    }

    console.log("Duplicate options are:===>", Duplicates);

    if (Duplicates.length > 0) {

        console.log("Duplicate options found.", Duplicates)
    }
    else {
        
        console.log("No duplicate options found..")
    }


    expect(Duplicates.length).toBe(0);

})