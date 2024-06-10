class EditionNavigation {
    open() {
        cy.visit('https://www.upday.com');
    }

    selectEdition(edition) {
        cy.get('[data-testid="header-editionSwitchButton"]').click();
        cy.get(`[data-testid="editionSwitch-menuItemLabel-${edition}"]`).click();
    }
}

export default new EditionNavigation();