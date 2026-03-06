/*
An iframe (short for “inline frame”) is an HTML element that allows you to embed another HTML document within the current document. 
Iframes are commonly used to embed external content such as videos, maps, or other web pages (as seen here) into a web page without affecting the parent document.
*/

import { test, expect } from "@playwright/test";

test("Frames Demo", async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // Total Number of Frames Present on the Page.

    const Frames = page.frames();
    console.log("Number of Frames:", Frames.length)


    //Approach 1: Using page.frame()

    const Frame = page.frame({ url:"https://ui.vision/demo/webtest/frames/frame_1.html"});  // Frame value can be Frame | Null
     
      if(Frame)
      {
          await Frame.locator("[name='mytext1']").fill("Hello");
          
      }
      else{
          console.log("Frame is Not Available");
      }

    await page.waitForTimeout(5000);



    //Approach 2: Using frameLocator()

    const Inputbox = page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("John");
    await page.waitForTimeout(5000);

})



test("Inner/child Frames Demo", async ({ page }) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const Frame2 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });

    if (Frame2) {

        await Frame2.locator("[name='mytext3']").fill("Welcome");

        const ChildFrames = Frame2.childFrames();

        console.log("Child Frames Inside The Frame 3:", ChildFrames.length);

        const Radio = ChildFrames[0].getByLabel("I am a human");  //Since ChildFrames returns array we use index to navigate to Frames
    
        await Radio.check();                    // Select Radio Button
        
        await expect(Radio).toBeChecked();      // Assertion
    }

    else {

        console.log("Frame 3 is Not Found..")
    }
    await page.waitForTimeout(5000);

})
