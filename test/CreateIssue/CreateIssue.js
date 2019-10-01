import LoginPage from "../../pages/LoginPage.js";
import MainPage from "../../pages/MainPage.js";
import IssuePage from "../../pages/IssuePage.js";
import {editIssueData} from "../../test/testData";
const assert = require('assert');
require('dotenv').config();


beforeEach(function() {
    LoginPage.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('Create an issue', () => {
    it('creates an MTP issue', () => {
        MainPage.click(MainPage.createIssueButton);
        MainPage.fillImportantIssueFields(editIssueData.project,editIssueData.summary);
        MainPage.waitForEnabled(MainPage.createIssueSubmitButton);
        MainPage.click(MainPage.createIssueSubmitButton);
        MainPage.waitForDisplayed(MainPage.issueCreatedLink);
        MainPage.createIssue(editIssueData.project, editIssueData.summary);
        MainPage.click(MainPage.issueCreatedLink);
        IssuePage.waitForDisplayed(IssuePage.issueTitle);
        assert.strictEqual(IssuePage.getText(IssuePage.issueTitle), editIssueData.summary)
    });

});
