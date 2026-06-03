import { Given, When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/hooks';
import { BasePage } from '../pages/BasePage';
import locator from '../locators/locators.json';
import {URLS} from '../config/env';


 let base: BasePage;         

   Given('user navigates to url',async function () 
  {
     base = new BasePage(page);
     await base.navigate(URLS.url);
  });

 When('user enters username as {string}', async function (username:string)
  {
     await base.enterText(locator.login.username,username);
  });

 When('user enters password as {string}', async function (password:string)
  {
     await base.enterText(locator.login.password,password);
  });

 When('user clicks on login button', async function ()
  {
     await base.click(locator.login.loginBtn);
  });

 Then('user should navigate to dashboard page', async function ()
  {
     await base.verifyElement(locator.login.dashboard);
  }); 

  
 Then('appplication should show error message as Invalid credentials', async function ()
  {
       await page.waitForTimeout(3000);
     await base.verifyElement(locator.login.invalidCredentials);
  }); 
