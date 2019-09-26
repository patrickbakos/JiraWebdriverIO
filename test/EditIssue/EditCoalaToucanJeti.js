import IssuePage from "../../pages/IssuePage";
import {login} from "../../test/TestBase";
require('dotenv').config();

describe('Edit issue page exits for COALA, TOUCAN, JETI', () => {
    it('it exists', () => {

        login();
        issueButtonExists('TOUCAN');
        issueButtonExists('JETI');
        issueButtonExists('COALA')
    })
});

function issueButtonExists(project) {
    IssuePage.open(project);
    browser.waitUntil(() => {
        return IssuePage.editIssueButton.isExisting()
    });
}
