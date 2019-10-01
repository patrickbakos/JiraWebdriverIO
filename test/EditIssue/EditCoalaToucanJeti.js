import IssuePage from "../../pages/IssuePage";
import LoginPage from "../../pages/LoginPage";
const assert = require('assert');
require('dotenv').config();

beforeEach(function() {

    let lp = new LoginPage();
    lp.login(process.env.JIRA_USERNAME, process.env.JIRA_PASSWORD);
});

describe('Edit issue page exits for COALA, TOUCAN, JETI', () => {

    let ip = new IssuePage();

    it('it exists for COALA', () => {
        assert.ok(ip.issueButtonExists('COALA'));
    });

    it('it exists for TOUCAN', () => {
        assert.ok(ip.issueButtonExists('TOUCAN'));
    });

    it('it exists for JETI', () => {
        assert.ok(ip.issueButtonExists('JETI'));
    })
});

