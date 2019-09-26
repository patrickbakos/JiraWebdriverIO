import LoginPage from "../../pages/LoginPage.js";
import MainPage from "../../pages/MainPage.js";
import IssuePage from "../../pages/IssuePage.js";
import {login} from "../../test/TestBase";
const assert = require('assert');
require('dotenv').config();

describe('Create an issue', () => {
    it('creates an MTP issue', () => {
        login();
        MainPage.createIssueButton.click();
        fillImportantFields('Main Testing Project (MTP)','Create Issue Test');
        MainPage.createIssueSubmitButton.waitForEnabled();
        MainPage.createIssueSubmitButton.click();
        MainPage.issueCreatedLink.waitForDisplayed();
        MainPage.issueCreatedLink.click();
        IssuePage.issueTitle.waitForDisplayed();
        assert.strictEqual(IssuePage.issueTitle.getText(), 'Create Issue Test')
    });

});

export function fillImportantFields(project,summary) {

    MainPage.projectInputField.waitForEnabled();
    MainPage.fillField(MainPage.projectInputField, project);
    MainPage.summaryInputField.waitForEnabled();
    MainPage.fillField(MainPage.summaryInputField, summary);

}