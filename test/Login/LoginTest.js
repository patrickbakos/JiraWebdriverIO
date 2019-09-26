import LoginPage from "../../pages/LoginPage.js";
import MainPage from "../../pages/MainPage.js";
import {creditentials} from "../testData.js";
const assert = require('assert');
require('dotenv').config();

describe('Log in with creditentials', () => {

    it('should log in', () => {

        LoginPage.open();
        LoginPage.fillField(LoginPage.usernameInputField, process.env.JIRA_USERNAME);
        LoginPage.fillField(LoginPage.passwordInputField, process.env.JIRA_PASSWORD);
        LoginPage.loginBtn.click();
        assert.strictEqual(MainPage.getUser(), process.env.JIRA_USERNAME)
    });

    for (let item in creditentials) {
        it("shouldn't log in", () => {
            LoginPage.open();
            LoginPage.fillField(LoginPage.usernameInputField, item);
            LoginPage.fillField(LoginPage.passwordInputField, creditentials[item]);
            LoginPage.loginBtn.click();
            assert.strictEqual(LoginPage.loginErrorMessage.getText(), 'Sorry, your username and password are incorrect - please try again.')
        })
    }
});
