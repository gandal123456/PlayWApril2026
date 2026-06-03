import { Page, expect } from '@playwright/test';

export class BasePage
{
    page: Page;

    constructor(page: Page)
    {
        this.page = page;
    }

    async navigate(url:string)
    {
        await this.page.goto(url);
    }

    async enterText(locator:string,value:string)
    {
        await this.page.locator(locator).fill(value);
    }

    async selectFromDropdown(dropdownLocator:string, optionLocatorTemplate:string, optionText:string)
    {
        await this.page.locator(dropdownLocator).click();
        const optionLocator = optionLocatorTemplate.replace('{ROLE}', optionText).replace('{STATUS}', optionText);
        await this.page.locator(optionLocator).click();
    }

    async selectAutoSuggestion(inputLocator:string, suggestionLocatorTemplate:string, value:string)
    {
        await this.page.locator(inputLocator).fill(value);
        const suggestionLocator = suggestionLocatorTemplate.replace('{EMPLOYEE}', value);
        await this.page.waitForSelector(suggestionLocator);
        await this.page.locator(suggestionLocator).click();
    }

    async click(locator:string)
    {
        await this.page.locator(locator).click();
    }

    async verifyElement(locator:string)
    {
        await expect(this.page.locator(locator)).toBeVisible();
    }
}