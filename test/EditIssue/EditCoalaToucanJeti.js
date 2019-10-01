import IssuePage from "../../pages/IssuePage";
import LoginPage from "../../pages/LoginPage";
require('dotenv').config();

beforeEach(function() {

    let lp = new LoginPage();
    lp.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('Edit issue page exits for COALA, TOUCAN, JETI', () => {

    let ip = new IssuePage();

    it('it exists', () => {

        ip.issueButtonExists('COALA');
        ip.issueButtonExists('TOUCAN');
        ip.issueButtonExists('JETI');
    })
});

