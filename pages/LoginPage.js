import Page from './Page'
require('dotenv').config();

class LoginPage extends Page {

    get usernameInputField() { return browser.$('//input[@id="login-form-username"]') }
    get passwordInputField() { return browser.$('//input[@id="login-form-password"]') }
    get loginBtn() { return browser.$('//input[@id="login-form-submit"]') }
    get loginErrorMessage() { return browser.$("//p[contains(.,'Sorry')]") }
    open() {
        super.open(URL)
    }
}
const URL = 'https://jira.codecool.codecanvas.hu/login.jsp';

export default new LoginPage();