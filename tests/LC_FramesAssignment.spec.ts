import { test, expect } from '@playwright/test';

// Test for Frame 1

test('Frame 1: Fill and assert input field', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  const Frame1 = page.frameLocator('frame[src="frame_1.html"]');
  await Frame1.locator('input[name="mytext1"]').fill('Welcome');

  await expect(Frame1.locator('input[name="mytext1"]')).toHaveValue('Welcome');
});


// Test for Frame 2

test('Frame 2: Fill and assert input field', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  const Frame2 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_2.html' });

  if (Frame2) {

    await Frame2.locator('input[name="mytext2"]').fill('Suneel');
    await expect(Frame2.locator('input[name="mytext2"]')).toHaveValue('Suneel');

  } else {

    console.error("Frame 2 not found.");
  }
});


// Test for Frame 3 with Nested Child Frame

test('Frame 3: Handle nested frame and form interactions', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  const Frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

  if (Frame3) {

    await Frame3.locator('[name="mytext3"]').fill('You are in Frame 3 - Teal');
    await expect(Frame3.locator('[name="mytext3"]')).toHaveValue('You are in Frame 3 - Teal');

    const ChildFrames = Frame3.childFrames();
    const Child = ChildFrames[0];

    // Interact with elements in the child frame
    
    await Child.getByRole('radio', { name: 'Hi, I am the UI.Vision IDE' }).click();

    await Child.getByRole('checkbox', { name: 'Form Autofilling' }).click();

    await Child.getByRole('option', { name: 'Choose' }).click();
    await page.waitForTimeout(2000);

    await Child.getByRole('option', { name: 'Yes' }).click();
    await page.waitForTimeout(2000);

    await Child.getByRole('button', { name: 'Next' }).click();

    const ShortText = Child.getByRole('textbox', { name: 'Enter a short text' });
    await ShortText.fill('We are here');
    await expect(ShortText).toHaveValue('We are here');

    const LongText = Child.getByRole('textbox', { name: 'Enter a long answer' });
    await LongText.fill('We are able to access all element in child frame');
    await expect(LongText).toHaveValue('We are able to access all element in child frame');

    await Child.getByRole('button', { name: 'Submit' }).click();
    const ConfirmationText = await Child.locator('.vHW8K').innerText();
    expect(ConfirmationText).toContain('Thank you for testing the UI');

  } else {

    console.error("Frame 3 not found.");
  }
});


// Test for Frame 5

test('Frame 5: Fill input and verify logo after link click', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  const Frame5 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_5.html' });

  if (Frame5) {

    await Frame5.locator('input[name="mytext5"]').fill('playwright');
    await expect(Frame5.locator('input[name="mytext5"]')).toHaveValue('playwright');
    await Frame5.locator('a[href="https://a9t9.com"]').click();
    await page.waitForTimeout(5000); // Give time for content to load
    const logo = Frame5.locator('img.responsive-img').first();
    await expect(logo).toBeVisible();

  } else {

    console.error("Frame 5 not found.");
  }
});
