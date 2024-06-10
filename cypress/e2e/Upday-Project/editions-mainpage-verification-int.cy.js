import EditionNavigation from './POM/Editions_page_POM';
import MainPage from './POM/Main_page_verification_POM';

describe('Main Page Verification for Each Edition', () => {
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

    editions.forEach(edition => {
        it(`should verify the main page content of the ${edition.toUpperCase()} edition`, () => {
            EditionNavigation.open();
            EditionNavigation.selectEdition(edition);
            MainPage.verifySections();
        });
    });
});