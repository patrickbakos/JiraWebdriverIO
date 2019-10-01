import Page from './Page'
import {editIssueData} from "../test/testData";
require('dotenv').config();


class MainPage extends Page {

    get userHeadIcon() { return browser.$('//a[@id="header-details-user-fullname"]') };
    get createIssueButton() { return browser.$('//a[@id="create_link"]') };
    get projectInputField() { return browser.$('//input[@id="project-field"]') };
    get summaryInputField() { return browser.$('//input[@id="summary"]')};
    get createIssueSubmitButton() { return browser.$('//input[@id="create-issue-submit"]')};
    get issueCreatedLink() { return browser.$('//a[@class="issue-created-key issue-link"]')};
    get createIssueModal() { return browser.$('//div[@id="create-issue-dialog"]')};
    get createAnotherIssueCheckbox() { return browser.$('//input[@id="qf-create-another"]') };
    get createIssueIssueTypeInput() { return browser.$('//input[@id="issuetype-field"]')};
    get issueTypeStory() { return browser.$('//a[.="Story"]')};
    get issueTypeTask() { return browser.$('//a[.="Task"]')};
    get issueTypeBug() { return browser.$('//a[.="Bug"]')};
    get issueTypeSubTask() { return browser.$('//a[.="Sub-task"]')};
    get issueTypeDropdown() { return browser.$('//div[@id="issuetype-single-select"]/span[@class="icon aui-ss-icon noloading drop-menu"]')}

    open() {
        super.open(URL);
    }

    getUser() {
        return this.userHeadIcon.getAttribute('data-username')
    }

    fillImportantIssueFields(project, summary) {
        this.projectInputField.waitForEnabled();
        this.fillField(this.projectInputField, project);
        this.summaryInputField.waitForEnabled();
        this.fillField(this.summaryInputField, summary);
    }

    createIssue(project, summary) {
        this.click(this.createIssueButton);
        this.fillImportantIssueFields(project,summary);
        this.waitForEnabled(this.createIssueSubmitButton);
        this.click(this.createIssueSubmitButton);
        this.waitForDisplayed(this.issueCreatedLink);
    }

    checkIssueTypes(element) {
        this.createIssueIssueTypeInput.keys(' ');
        this.issueTypeDropdown.click();
        browser.waitUntil(() => {
            return this.isElementExisting(element)
        });
    }
}


const URL = process.env.URL;
export default new MainPage();