import EditionNavigation from './POM/Editions_page_POM';
import NavigationPage from './POM/Tabs_navigation_POM';

const editionTabs = {
    'de': ['Deutschland', 'International', 'Nahost', 'Ukraine', 'Fußball-EM', 'News erklärt','News-Briefing'],
    'fr': ['Actualité', 'Vidéos', 'En images', 'Guerre en Ukraine', 'Faits Divers', 'Politique', 'International', 'Sports', 'WTF', 'Météo', 'Santé', 'Votre Quotidien', 'Quiz'],
    'nl': ['Binnenland', 'Buitenland']
};

describe('Navigate through tabs of each edition on Upday', () => {
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
        it(`should navigate through tabs for the ${edition.toUpperCase()} edition`, () => {
            EditionNavigation.open();
            EditionNavigation.selectEdition(edition);
            const tabs = editionTabs[edition];
            NavigationPage.navigateThroughTabs(tabs);
        });
    });
});