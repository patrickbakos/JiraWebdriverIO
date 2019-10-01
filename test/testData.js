require('dotenv').config();

export const creditentials = {
    'faszi': process.env.JIRA_PASSWORD,
    'user19': 'eper',
    'saniy': 'manyi'
};

export const editIssueData = {
    'project': 'Main Testing Project (MTP)',
    'summary': 'Edit issue test',
    'summary_update': 'Edit issue test success'
};