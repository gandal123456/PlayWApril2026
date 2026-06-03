import { Before,After,setDefaultTimeout,Status} from '@cucumber/cucumber';

import {chromium,firefox,webkit,Browser,Page} from '@playwright/test';

setDefaultTimeout(60000);

export let browser: Browser;
export let page: Page;

Before(async function () 
 {

      browser = await chromium.launch    //instead of chromium use webkit/firefox to run tests in respective browsers
        ({
            headless: false
        });

      const context = await browser.newContext();

       page = await context.newPage();

 });


After(async function ({ result })
 {

    // Take screenshot only if scenario fails
    if (result?.status === Status.FAILED) {

        const screenshot = await page.screenshot({

            path: `screenshots/failed-${Date.now()}.png`,

            type: 'png'

        });

        // Attach screenshot to Allure Report
         this.attach(screenshot, 'image/png');
    }

       await browser.close();

});

      
