import MainPage from "../../pages/MainPage.js";
import IssuePage from "../../pages/IssuePage";
import {login} from "../../test/TestBase";
require('dotenv').config();

describe('Edit issue page exits for MTP', () => {
    it('it exists', () => {

        login();
        MainPage.createIssueButton.click();
        fillImportantFields('Main Testing Project (MTP)', 'Edit Issue Test');
        MainPage.createIssueSubmitButton.waitForEnabled();
        MainPage.createIssueSubmitButton.click();
        MainPage.issueCreatedLink.waitForDisplayed();
        MainPage.issueCreatedLink.click();
        IssuePage.editIssueButtonIssuePage.click();
        updateSummary('Edit Issue Test success');
        IssuePage.editIssueSubmit.click();
        browser.waitUntil(() => {
            return IssuePage.issueTitle.getText() === 'Edit Issue Test success'
        });
    })
});

function updateSummary(summary) {
    IssuePage.summaryInputField.waitForEnabled();
    IssuePage.fillField(IssuePage.summaryInputField, summary)
}

function fillImportantFields(project,summary) {
    MainPage.projectInputField.waitForEnabled();
    MainPage.fillField(MainPage.projectInputField, project);
    MainPage.summaryInputField.waitForEnabled();
    MainPage.fillField(MainPage.summaryInputField, summary);

}