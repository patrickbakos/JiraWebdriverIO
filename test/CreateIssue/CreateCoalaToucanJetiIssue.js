import MainPage from "../../pages/MainPage.js";
import {login} from "../TestBase";
import LoginPage from "../../pages/LoginPage";
const assert = require('assert');
require('dotenv').config();

beforeEach(function() {
    LoginPage.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('create COALA, TOUCAN, JETI issues', () => {
    it('Possible issue types: Story, Task, Bug, Sub-task', () => {
        MainPage.createIssueButton.click();

        createIssueForProject('COALA');
        createIssueForProject('TOUCAN');
        createIssueForProject('JETI')
    })
});

function fillProjectField(project) {
    MainPage.projectInputField.waitForEnabled();
    MainPage.fillField(MainPage.projectInputField, project);
    browser.keys('\uE006')
}

function checkIssueTypes(element) {
    MainPage.createIssueIssueTypeInput.keys(' ');
    MainPage.issueTypeDropdown.click();
    browser.waitUntil(() => {
        return element.isExisting()
    });
}

function createIssueForProject(project) {
    fillProjectField(project);
    checkIssueTypes(MainPage.issueTypeSubTask);
    checkIssueTypes(MainPage.issueTypeStory);
    checkIssueTypes(MainPage.issueTypeBug);
    checkIssueTypes(MainPage.issueTypeTask);
}
