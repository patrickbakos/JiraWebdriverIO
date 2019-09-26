import MainPage from "../../pages/MainPage.js";
import {fillImportantFields} from "./CreateIssue";
import {login} from "../TestBase";

const assert = require('assert');
require('dotenv').config();

describe('Chain create issues', () => {

        it('opens another "create issue" page after issue creation', () => {
            login();
            MainPage.createIssueButton.click();
            fillImportantFields('Main Testing Project (MTP)','Create Issue Test');
            MainPage.createAnotherIssueCheckbox.waitForEnabled();
            MainPage.createAnotherIssueCheckbox.click();
            MainPage.createIssueSubmitButton.waitForEnabled();
            MainPage.createIssueSubmitButton.click();
            assert.strictEqual(MainPage.createIssueModal.waitForEnabled(), true)
        })
});