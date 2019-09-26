import Page from './Page'

class IssuePage extends Page {

    get issueTitle() {return browser.$('//h1[@id="summary-val"]')};
    get projectInputField() { return browser.$('//input[@id="project-field"]') };
    get summaryInputField() { return browser.$('//input[@id="summary"]')};
    get editIssueButton() { return browser.$('//a[@title="Edit this issue"]')};
    get editIssueButtonIssuePage() { return browser.$('//a[@id="edit-issue"]')}
    get editIssueSubmit() { return browser.$('//input[@id="edit-issue-submit"]')};

    open(id) {
        super.open(URL + id);
    }
}
const URL = 'https://jira.codecool.codecanvas.hu/issues/?jql=project%20%3D%20';
export default new IssuePage();
