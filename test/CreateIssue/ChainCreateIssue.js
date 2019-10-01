import MainPage from "../../pages/MainPage.js";
import LoginPage from "../../pages/LoginPage";
import {editIssueData} from "../testData";

const assert = require('assert');
require('dotenv').config();

beforeEach(function() {
    LoginPage.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('Chain create issues', () => {

        it('opens another "create issue" page after issue creation', () => {
            MainPage.click(MainPage.createIssueButton);
            MainPage.fillImportantIssueFields(editIssueData.project,editIssueData.summary);
            MainPage.waitForEnabled(MainPage.createAnotherIssueCheckbox);
            MainPage.click(MainPage.createAnotherIssueCheckbox);
            MainPage.waitForEnabled(MainPage.createIssueSubmitButton);
            MainPage.click(MainPage.createIssueSubmitButton);
            assert.ok(MainPage.waitForEnabled(MainPage.createIssueModal))
        })
});