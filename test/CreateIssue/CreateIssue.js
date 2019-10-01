import LoginPage from "../../pages/LoginPage.js";
import MainPage from "../../pages/MainPage.js";
import IssuePage from "../../pages/IssuePage.js";
import {editIssueData} from "../../test/testData";
const assert = require('assert');
require('dotenv').config();


beforeEach(function() {

    let lp = new LoginPage();
    lp.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('Create an issue', () => {

    let mp = new MainPage();
    let ip = new IssuePage();

    it('creates an MTP issue', () => {
        mp.click(mp.createIssueButton);
        mp.fillImportantIssueFields(editIssueData.project,editIssueData.summary);
        mp.waitForEnabled(mp.createIssueSubmitButton);
        mp.click(mp.createIssueSubmitButton);
        mp.waitForDisplayed(mp.issueCreatedLink);
        mp.click(mp.issueCreatedLink);
        ip.waitForDisplayed(ip.issueTitle);
        assert.strictEqual(ip.getText(ip.issueTitle), editIssueData.summary)
    });
});
