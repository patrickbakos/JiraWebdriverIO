import MainPage from "../../pages/MainPage.js";
import IssuePage from "../../pages/IssuePage";
import LoginPage from "../../pages/LoginPage";
import {editIssueData} from "../../test/testData";
const assert = require('assert');
require('dotenv').config();

beforeEach(function() {

    let lp = new LoginPage();
    lp.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('Edit issue page exits for MTP', () => {

    let mp = new MainPage();
    let ip = new IssuePage();

    it('it exists', () => {

        mp.click(mp.createIssueButton);
        mp.fillImportantIssueFields(editIssueData.project, editIssueData.summary);
        mp.waitForEnabled(mp.createIssueSubmitButton);
        mp.click(mp.createIssueSubmitButton);
        mp.waitForDisplayed(mp.issueCreatedLink);
        mp.click(mp.issueCreatedLink);
        ip.waitForEnabled(ip.editIssueButton);
        ip.click(ip.editIssueButton);
        ip.updateSummary(editIssueData.summary_update);
        ip.click(ip.editIssueSubmit);

        assert.ok(browser.waitUntil(() => {
            return ip.getText(ip.issueTitle) === editIssueData.summary_update
        }))
    })
});

