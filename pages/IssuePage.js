import Page from './Page'
require('dotenv').config();

export default class IssuePage extends Page {

    get issueTitle() {return browser.$('//h1[@id="summary-val"]')};
    get summaryInputField() { return browser.$('//input[@id="summary"]')};
    get editIssueButtonContainer() { return browser.$('//div[@id="opsbar-edit-issue_container"]')}
    get editIssueButton() { return browser.$('//a[@id="edit-issue"]')}
    get editIssueSubmit() { return browser.$('//input[@id="edit-issue-submit"]')};

    open(id) {
        super.open(URL + id);
    }

    updateSummary(summary) {

        this.summaryInputField.waitForEnabled();
        this.fillField(this.summaryInputField, summary)
    }

    issueButtonExists(project) {

        this.open(project);
        return this.editIssueButtonContainer.waitForEnabled() && this.editIssueButtonContainer.waitForDisplayed()
    }
}

const URL = process.env.URL + '/issues/?jql=project%20%3D%20';