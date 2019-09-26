import LoginPage from "../pages/LoginPage";

export const assert = require('assert');
require('dotenv').config();

export function login() {

        LoginPage.open();
        LoginPage.usernameInputField.waitForDisplayed();
        LoginPage.fillField(LoginPage.usernameInputField, process.env.JIRA_USERNAME);
        LoginPage.fillField(LoginPage.passwordInputField, process.env.JIRA_PASSWORD);
        LoginPage.loginBtn.click();
}