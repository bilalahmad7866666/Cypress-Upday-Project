import EditionsPage from './POM/Editions_page_POM';
import ArticlesPage from './POM/Articles_verification_POM';

describe('Navigate through different editions on Upday', () => {
    const editions = ['de', 'fr', 'nl'];

    before(() => {
        // Exception handling for React errors
        Cypress.on('uncaught:exception', (err, runnable) => {
            const reactErrors = ['Minified React error #425', 'Minified React error #418', 'Minified React error #423'];
            if (reactErrors.some(code => err.message.includes(code))) {
                cy.log('Caught React error. Test will continue.');
                return false;
            }
            // Return true to let Cypress handle other uncaught exceptions
            return true;
        });
    });

    it('should visit each edition on the website and verify first three articles', () => {
        editions.forEach(edition => {
            EditionsPage.open();
            EditionsPage.selectEdition(edition);
            ArticlesPage.verifyFirstThreeArticles();
        });
    });
});