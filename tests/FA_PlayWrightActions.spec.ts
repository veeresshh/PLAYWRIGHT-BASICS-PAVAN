import { test, expect, Locator } from "@playwright/test";


// Text Input/ Text Box/ Input Box
// Radio Buttons
// Check boxes

test('Text Input Actions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const TextBox: Locator = page.locator('#name');

    await expect(TextBox).toBeVisible();  // When expect is applied on elements await is required
    await expect(TextBox).toBeEnabled();

    const MaxLength: string | null = await TextBox.getAttribute("maxlength"); // Returns value of maxlength attribute of the element
    expect(MaxLength).toBe('15');         // When expect is applied not on elements but on static data await is not required


    await TextBox.fill("John Canedy");

    //console.log("text content of FirstName :", await textBox.textContent()); // returns empty becasue it should only be used on headers and other static text

    const EnteredValue: string = await TextBox.inputValue();
    console.log("Input Value of the FirstName :", EnteredValue); // returns th einput value of text box
    expect(EnteredValue).toBe("John Canedy");

    await page.waitForTimeout(3000);

});


// Radio Buttons

test('Radio Button Actions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const MaleRadioButton: Locator = page.locator('#male');  // Male radio button

    await expect(MaleRadioButton).toBeVisible();
    await expect(MaleRadioButton).toBeEnabled();
    expect(await MaleRadioButton.isChecked()).toBe(false);

    await MaleRadioButton.check(); // select radio button
    expect(await MaleRadioButton.isChecked()).toBe(true);
    await expect(MaleRadioButton).toBeChecked(); // Preferable

    await page.waitForTimeout(3000);

});



test.only('CheckBox Actions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // 1. Select specific checkbox (Sunday) using getByLabel and assert
    
    const SundayCheckbox: Locator = page.getByLabel('Sunday');
    await SundayCheckbox.check();
    await expect(SundayCheckbox).toBeChecked();


    // 2. Select all checkboxes and assert each is checked

    const Days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const Checkboxes: Locator[] = Days.map(index => page.getByLabel(index));
    expect(Checkboxes.length).toBe(7);

    for (const Checkbox of Checkboxes) {
        await Checkbox.check();
        await expect(Checkbox).toBeChecked();
    }

    await page.waitForTimeout(2000);

    // 3. Uncheck last 3 checkboxes and assert

    for (const Checkbox of Checkboxes.slice(-3)) {
        await Checkbox.uncheck();
        await expect(Checkbox).not.toBeChecked();
    }

    await page.waitForTimeout(3000);


    //4.  Toggle checkboxes: If checked, uncheck; if unchecked, check. Assert state flipped.

    for (const Checkbox of Checkboxes) {
        if (await Checkbox.isChecked()) // true
        {
            // only if checked
            await Checkbox.uncheck();
            await expect(Checkbox).not.toBeChecked();

        }
        else {
            // only if not checked
            await Checkbox.check();
            await expect(Checkbox).toBeChecked();
        }
    }
    await page.waitForTimeout(3000);


    // 5. Randomly select check boxes - Select checkboxes by index (1, 3, 6) and assert

    const indexes: number[] = [1, 3, 6];

    for (const i of indexes) {
        await Checkboxes[i].check();
        await expect(Checkboxes[i]).toBeChecked();

    }
    await page.waitForTimeout(5000);


    //6. Select the check box based on the Label

    const WeekName: string = "Friday";

    for (const Label of Days) {
        if (Label.toLowerCase() === WeekName.toLowerCase()) {
            const Checkbox = page.getByLabel(Label);
            Checkbox.check();
            await expect(Checkbox).toBeChecked();
        }
    }
    await page.waitForTimeout(5000);

});



