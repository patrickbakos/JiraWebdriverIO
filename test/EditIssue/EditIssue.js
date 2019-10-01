import MainPage from "../../pages/MainPage.js";
import IssuePage from "../../pages/IssuePage";
import LoginPage from "../../pages/LoginPage";
import {editIssueData} from "../../test/testData";
const assert = require('assert');
require('dotenv').config();

beforeEach(function() {
    LoginPage.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('Edit issue page exits for MTP', () => {
    it('it exists', () => {

        MainPage.click(MainPage.createIssueButton);
        MainPage.fillImportantIssueFields(editIssueData.project, editIssueData.summary);
        MainPage.waitForEnabled(MainPage.createIssueSubmitButton);
        MainPage.click(MainPage.createIssueSubmitButton);
        MainPage.waitForDisplayed(MainPage.issueCreatedLink);
        MainPage.click(MainPage.issueCreatedLink);
        IssuePage.click(IssuePage.editIssueButton);
        IssuePage.updateSummary(editIssueData.summary_update);
        IssuePage.click(IssuePage.editIssueSubmit);

        assert.ok(browser.waitUntil(() => {
            return IssuePage.getText(IssuePage.issueTitle) === editIssueData.summary_update
        }))
    })
});

