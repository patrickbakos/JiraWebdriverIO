import MainPage from "../../pages/MainPage.js";
import LoginPage from "../../pages/LoginPage";
import {editIssueData} from "../testData";

const assert = require('assert');
require('dotenv').config();

beforeEach(function() {

    let lp = new LoginPage();
    lp.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('Chain create issues', () => {

    let mp = new MainPage();

        it('opens another "create issue" page after issue creation', () => {
            mp.click(mp.createIssueButton);
            mp.fillImportantIssueFields(editIssueData.project,editIssueData.summary);
            mp.waitForEnabled(mp.createAnotherIssueCheckbox);
            mp.click(mp.createAnotherIssueCheckbox);
            mp.waitForEnabled(mp.createIssueSubmitButton);
            mp.click(mp.createIssueSubmitButton);
            assert.ok(mp.waitForEnabled(mp.createIssueModal))
        })
});