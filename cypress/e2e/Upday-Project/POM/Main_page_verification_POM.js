class MainPage {
    visit() {
        cy.visit('https://www.upday.com');
    }

    verifyHeader() {
        cy.get('.header_header__3RG80').should('be.visible');
    }

    verifyFooter() {
        cy.get('[data-testid="footer"]').should('be.visible');
    }

    verifyMainContent() {
        cy.get('.homepage_main__V5GUW').should('be.visible');
    }

    verifyEditionSwitchButton() {
        cy.get('[data-testid="header-editionSwitchButton"]').should('be.visible');
    }

    verifyArticlesSection() {
        cy.get('[data-testid="articleCardOverlayLink"]').should('have.length.greaterThan', 0);
    }

    verifyStoreSection() {
        cy.get('.appsDownloads_apps__xP8mQ').should('have.length.greaterThan', 0);
    }
    

    verifySections() {
        this.verifyHeader();
        this.verifyFooter();
        this.verifyMainContent();
        this.verifyEditionSwitchButton();
        this.verifyArticlesSection();
        this.verifyStoreSection();
    }
}

export default new MainPage();