import IssuePage from "../../pages/IssuePage";
import LoginPage from "../../pages/LoginPage";
require('dotenv').config();

beforeEach(function() {
    LoginPage.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('Edit issue page exits for COALA, TOUCAN, JETI', () => {
    it('it exists', () => {

        IssuePage.issueButtonExists('COALA')
        IssuePage.issueButtonExists('TOUCAN');
        IssuePage.issueButtonExists('JETI');
    })
});

