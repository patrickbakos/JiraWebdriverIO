import Page from './Page'
require('dotenv').config();

export default class LoginPage extends Page {

    get usernameInputField() { return browser.$('//input[@id="login-form-username"]') }
    get passwordInputField() { return browser.$('//input[@id="login-form-password"]') }
    get loginBtn() { return browser.$('//input[@id="login-form-submit"]') }
    get loginErrorMessage() { return browser.$("//p[contains(.,'Sorry')]") }

    open() {
        super.open(URL)
    }

    login(username, password) {

        this.open();
        this.usernameInputField.waitForDisplayed();
        this.fillField(this.usernameInputField, username);
        this.fillField(this.passwordInputField, password);
        this.loginBtn.click();
    }
}

const URL = process.env.URL + '/login.jsp';
