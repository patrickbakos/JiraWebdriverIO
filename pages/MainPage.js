import Page from './Page'
require('dotenv').config();


export default class MainPage extends Page {

    get userHeadIcon() {
        return browser.$('//a[@id="header-details-user-fullname"]')
    };

    get createIssueButton() {
        return browser.$('//a[@id="create_link"]')
    };

    get projectInputField() {
        return browser.$('//input[@id="project-field"]')
    };

    get summaryInputField() {
        return browser.$('//input[@id="summary"]')
    };

    get createIssueSubmitButton() {
        return browser.$('//input[@id="create-issue-submit"]')
    };

    get issueCreatedLink() {
        return browser.$('//a[@class="issue-created-key issue-link"]')
    };

    get createIssueModal() {
        return browser.$('//div[@id="create-issue-dialog"]')
    };

    get createAnotherIssueCheckbox() {
        return browser.$('//input[@id="qf-create-another"]')
    };

    get createIssueIssueTypeInput() {
        return browser.$('//input[@id="issuetype-field"]')
    };

    get issueTypeStory() {
        return browser.$('//a[.="Story"]')
    };

    get issueTypeTask() {
        return browser.$('//a[.="Task"]')
    };

    get issueTypeBug() {
        return browser.$('//a[.="Bug"]')
    };

    get issueTypeSubTask() {
        return browser.$('//a[.="Sub-task"]')
    };

    get issueTypeDropdown() {
        return browser.$('//div[@id="issuetype-single-select"]/span[@class="icon aui-ss-icon noloading drop-menu"]')
    }

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

    fillProjectFieldForIssue(project) {
        this.projectInputField.waitForEnabled();
        this.fillField(this.projectInputField, project);
        browser.keys('\uE006')
    }

    checkIssueTypes(element) {
        this.createIssueIssueTypeInput.waitForEnabled();
        this.createIssueIssueTypeInput.click();
        browser.keys('\uE003');
        this.issueTypeDropdown.click();
        return element.waitForExist();
    }

    createIssueForProject(project) {
        this.fillProjectFieldForIssue(project);
        return  this.checkIssueTypes(this.issueTypeSubTask) &&
                this.checkIssueTypes(this.issueTypeBug) &&
                this.checkIssueTypes(this.issueTypeTask) &&
                this.checkIssueTypes(this.issueTypeStory)
    }
}

const URL = process.env.URL;