import { test, expect, Locator } from "@playwright/test";


test("Single Select Drop down", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //1) Select Option From the DropDown ( 4 ways)

    await page.locator('#country').selectOption('India');              // Visible text
    await page.locator('#country').selectOption({value:'uk'});         // By using value attribute  // Observe Curly Braces
    await page.locator('#country').selectOption({label:'India'});      // By using label
    await page.locator('#country').selectOption({index:3});            // By using index


    //2) Check Number of Options in the Dropdown(count)

    const DropdownOptions: Locator = page.locator('#country>option');
    await expect(DropdownOptions).toHaveCount(10);


    //3) Check an Option Present in the Dropdown

    const DropDownContents : string[] =await DropdownOptions.allTextContents();
    const OptionsText: string[] = (DropDownContents).map(text => text.trim());
    console.log(OptionsText)

    
    expect(OptionsText).toContain('Japan'); // Check if the array contains "Japan"


    //4) Printing Options from the Drop Down

    for (const option of OptionsText) {
        console.log(option)
    }

    await page.waitForTimeout(3000);
})