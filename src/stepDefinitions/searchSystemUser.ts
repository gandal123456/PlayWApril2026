   import {When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/hooks';
import { BasePage } from '../pages/BasePage';
import locator from '../locators/locators.json';

 let base: BasePage;   
    
   When('user clicks on Admin tab', async function () 
     {
           base = new BasePage(page);
          await base.click(locator.search.adminTab);
     });
          
          
When('user enters username as a {string}', async function (username:string)
  {
     await base.enterText(locator.search.username,username);
  });


   When('user clicks on search button', async function () 
     {
          await base.click(locator.search.searchBtn);       
     });
       
       
  Then('application shows result as 1 record found', async function ()
     {    
        await base.verifyElement(locator.search.recordFound);
    });