class NavigationPage {
    navigateThroughTabs(tabs) {
        tabs.forEach(tab => {
            cy.get(`[data-title="${tab}"] > a`, { timeout: 10000 }).should('exist').click();
            cy.get('._category__categoryPage__BgO4S', { timeout: 10000 }).should('be.visible');
        });
    }
}

export default new NavigationPage();