import { When, Then } from '@cucumber/cucumber';
import { page } from '../hooks/hooks';
import { BasePage } from '../pages/BasePage';
import locator from '../locators/locators.json';

let base: BasePage;

When('user clicks on Add button', async function () {
    base = new BasePage(page);
    await base.click(locator.addUser.addBtn);
});

When('user selects user role as {string}', async function (role: string) {
    await base.selectFromDropdown(locator.addUser.userRoleDropdown, locator.addUser.userRoleOption, role);
});

When('user enters employee name as {string}', async function (employee: string) {
    await base.selectAutoSuggestion(locator.addUser.employeeName, locator.addUser.employeeSuggestion, employee);
});

When('user enters username for new user as {string}', async function (newUsername: string) {
    await base.enterText(locator.addUser.newUsername, newUsername);
});

When('user selects status as {string}', async function (status: string) {
    await base.selectFromDropdown(locator.addUser.statusDropdown, locator.addUser.statusOption, status);
});

When('user enters password for new user as {string}', async function (password: string) {
    await base.enterText(locator.addUser.password, password);
});

When('user enters confirm password for new user as {string}', async function (password: string) {
    await base.enterText(locator.addUser.confirmPassword, password);
});

When('user clicks on Save button', async function () {
    await base.click(locator.addUser.saveBtn);
});

Then('application should show user creation success message', async function () {
    await base.verifyElement(locator.addUser.successMessage);
});
