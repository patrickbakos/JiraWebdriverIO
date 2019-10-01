import Page from './Page'
require('dotenv').config();

class IssuePage extends Page {

    get issueTitle() {return browser.$('//h1[@id="summary-val"]')};
    get projectInputField() { return browser.$('//input[@id="project-field"]') };
    get summaryInputField() { return browser.$('//input[@id="summary"]')};
    get editIssueButton() { return browser.$('//div[@id="opsbar-edit-issue_container"]')}
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
        return this.editIssueButton.waitForEnabled() && this.editIssueButton.waitForDisplayed()
    }
}
const URL = process.env.URL + '/issues/?jql=project%20%3D%20';
export default new IssuePage();
