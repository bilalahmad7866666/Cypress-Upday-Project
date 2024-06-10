class ArticlesPage {
    constructor() {
        // Exception handling for React errors
        cy.on('uncaught:exception', (err, runnable) => {
            const reactErrors = ['Minified React error #425', 'Minified React error #418', 'Minified React error #423'];
            if (reactErrors.some(code => err.message.includes(code))) {
                return false;
            }
        });
    }

    verifyFirstThreeArticles() {
        // Verify the first three articles on the page
        for (let i = 0; i < 3; i++) {
            cy.get('[data-testid="articleCardOverlayLink"]').eq(i).click();
            cy.get('._article__articlePage__2wz_P').should('be.visible', { timeout: 100000 });
            cy.get('[data-testid="articleHeadline"]').should('exist');
            cy.go('back'); // Navigate back to the edition page
        }
    }
}

export default new ArticlesPage();