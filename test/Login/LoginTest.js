import LoginPage from "../../pages/LoginPage.js";
import MainPage from "../../pages/MainPage.js";
import {creditentials} from "../testData.js";
const assert = require('assert');
require('dotenv').config();

describe('Log in with creditentials', () => {

    let lp = new LoginPage();
    let mp = new MainPage();

    it('should log in', () => {
        lp.open();
        lp.fillField(lp.usernameInputField, process.env.JIRA_USERNAME);
        lp.fillField(lp.passwordInputField, process.env.JIRA_PASSWORD);
        lp.click(lp.loginBtn);
        assert.strictEqual(mp.getUser(), process.env.JIRA_USERNAME)
    });

    for (let item in creditentials) it("shouldn't log in", () => {
        lp.login(item, creditentials[item]);
        assert.strictEqual(lp.loginErrorMessage.getText(), 'Sorry, your username and password are incorrect - please try again.')
    })
});
