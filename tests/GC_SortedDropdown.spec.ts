import { test, expect, Locator } from "@playwright/test";


test("Verify dropdown is Sorted", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const DropDownOptions: Locator = page.locator('#animals>option'); 

    const OptionsText: string[] = (await DropDownOptions.allTextContents()).map(text => text.trim());

    const OriginalList: string[] = [...OptionsText]; // VVIP - 


    const SortedList: string[] = [...OptionsText].sort();

    console.log("Original list:", OriginalList);
    console.log("Sorted list:", SortedList);

    expect(OriginalList).toEqual(SortedList);

})