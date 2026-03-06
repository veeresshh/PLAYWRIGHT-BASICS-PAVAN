import { test, expect, Locator } from '@playwright/test';

test('Student Registration Form - InputText', async ({ page }) => {
  
  // Navigate to the form

  await page.goto('https://demo.wpeverest.com/user-registration/student-registration-form/');
  await page.waitForLoadState('domcontentloaded');

  // First Name input box

  const FirstName = page.locator('#first_name');

  // Check if input is visible

  console.log('Is "First Name" displayed:', await FirstName.isVisible());

  // Check if input is enabled

  console.log('Is "First Name" enabled:', await FirstName.isEnabled());

  // Check if mandatory (has 'required' attribute)

  const Required = await FirstName.getAttribute('required');
  console.log('Is "First Name" mandatory:', Required !== null);

  // Get placeholder

  const Placeholder = await FirstName.getAttribute('placeholder');
  console.log('Placeholder text:', Placeholder);

  // Get maxlength

  const MaxLength = await FirstName.getAttribute('maxlength');
  console.log('Max Length:', MaxLength);

  // Type text into the input

  await FirstName.fill('John');

  // Get entered text

  const EnteredText = await FirstName.inputValue();
  console.log('Entered Text:', EnteredText);

});




test.only('Student Registration Form - Radio and Checkbox', async ({ page }) => {

  await page.goto('https://demo.wpeverest.com/user-registration/student-registration-form/');

  // --- Radio Button: Male ---

  const MaleRadio = page.locator('#radio_1623051748_Male');
  console.log('Is Male selected:', await MaleRadio.isChecked());
  await MaleRadio.check();
  console.log('Is Male selected after click:', await MaleRadio.isChecked());

  // --- Checkboxes ---

  //Select the checkbox for "Singing".

  const SingingCheckbox = page.locator('input[value="Singing"]');
  await SingingCheckbox.check();
  console.log('Is Singing selected:', await SingingCheckbox.isChecked());

  //Capture all available hobbies and print the count.

  const Hobbies: Locator = page.locator('div.ur-field-item.field-checkbox input[type="checkbox"]');// Returns multiple elements
  const Count = await Hobbies.count();
  console.log('Number of Hobbies:', Count);

  // Check all hobbies using a loop. 

  for (let i = 0; i < Count; i++) {
    await Hobbies.nth(i).check();
  }
  await page.waitForTimeout(3000);

  // Uncheck all hobbies using a loop. 

  for (let i = 0; i < Count; i++) {
    await Hobbies.nth(i).uncheck();
  }
  await page.waitForTimeout(3000);



  // Check last 2 hobbies

  for (let i = Count - 2; i < Count; i++) {
    await Hobbies.nth(i).check();
  }
  await page.waitForTimeout(3000);



  // Check first 3 hobbies

  for (let i = 0; i < 3; i++) {
    await Hobbies.nth(i).check();
  }
  await page.waitForTimeout(3000);


  // Check random hobbies (i=1 and i=5)
  
  for (let i = 0; i < Count; i++) {
    if (i === 1 || i === 5) {
      await Hobbies.nth(i).check({ force: true });
    }
  }
  await page.waitForTimeout(3000);



  // Check hobbies based on values using a switch-case statement

  const HobbyValue: string = 'Singing';

  switch (HobbyValue) {
    case 'Drawing':
      await page.locator('input[value="Drawing"]').check();
      break;
    case 'Singing':
      await page.locator('input[value="Singing"]').check();
      break;
    case 'Dancing':
      await page.locator('input[value="Dancing"]').check();
      break;
    case 'Sketching':
      await page.locator('input[value="Sketching"]').check();
      break;
    default:
      console.log('Hobby not found');
  }
  await page.waitForTimeout(3000);

});
