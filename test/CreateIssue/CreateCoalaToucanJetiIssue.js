import MainPage from "../../pages/MainPage.js";
import LoginPage from "../../pages/LoginPage";
const assert = require('assert');
require('dotenv').config();

beforeEach(function() {

    let lp = new LoginPage();
    lp.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('create COALA, TOUCAN, JETI issues', () => {

    let mp = new MainPage();

    it('COALA issue types: Story, Task, Bug, Sub-task', () => {
        mp.createIssueButton.click();
        assert.ok(mp.createIssueForProject('COALA'))
    });

    it('TOUCAN issue types: Story, Task, Bug, Sub-task', () => {
        mp.createIssueButton.click();
        assert.ok(mp.createIssueForProject('TOUCAN'))
    });

    it('JETI issue types: Story, Task, Bug, Sub-task', () => {
        mp.createIssueButton.click();
        assert.ok(mp.createIssueForProject('JETI'))
    })
});

