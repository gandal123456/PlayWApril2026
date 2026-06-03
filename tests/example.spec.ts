import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => 
   {
  
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //maximize the browser
   // await page.setViewportSize({ width: 1920, height: 1080 });
   
     await page.waitForTimeout(5000);

   //enter username
    await page.locator('input[placeholder="Username"]').fill('Admin');

   //enter password
    await page.locator('input[placeholder="Password"]').fill('admin123');
    
   //click on login button
    await page.locator('button:has-text("Login")').click();  //   
    
  
   //click on Admin
    await page.locator("//*[@class='oxd-main-menu-item']//*[text()='Admin']").click();


   //enter username
   await page.locator("(//*[@class='oxd-input oxd-input--active'])[2]").fill("James123");

  await page.waitForTimeout(5000);
// Select User Role
    await page.locator("(//*[@class='oxd-select-text oxd-select-text--active'])[1]").click();
       await page.waitForTimeout(2000);
    //use arrow down and enter to select the option
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

      
    // Enter Employee Name
    await page.locator('input[placeholder="Type for hints..."]').fill("James  Butler");
      await page.waitForTimeout(2000);
     await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

       await page.waitForTimeout(5000);
    // Select Status
    await page.locator("(//*[@class='oxd-select-text oxd-select-text--active'])[1]").click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');


   //click on search button
    await page.locator("//*[text()=' Search ']").click();

    //assertion for record found
    await expect(page.locator("//*[text()='(1) Record Found']")).toBeVisible();
  
});

