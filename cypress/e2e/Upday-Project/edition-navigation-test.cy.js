

describe.only('Navigate through different editions on Upday', () => {
  it('should visit each edition on the website', () => {
    // Visit the main page
    cy.visit('https://www.upday.com');

    cy.get('[data-testid="header-editionSwitchButton"]') // Click on edition button
      .click(); // Open the dropdown 

    // Get all edition links
    cy.get('[data-testid="editionSwitch-menuItemLabel-de"]') // click on DE edition
      .click();

        // Verify that the page has navigated to the selected edition
        cy.url().should('include', 'https://www.upday.com/de'); 

        // Go back to the main page or open the dropdown again to select the next edition
        cy.get('[data-testid="header-editionSwitchButton"]') 
        .click(); // Open the dropdown or expand the list

        cy.get('[data-testid="editionSwitch-menuItemLabel-fr"]') // Click on FR edition
      .click();

        // Verify that the page has navigated to the selected edition
        cy.url().should('include', 'https://www.upday.com/fr'); // 

              // Go back to the main page or open the dropdown again to select the next edition
              cy.get('[data-testid="header-editionSwitchButton"]') 
              .click(); // Open the dropdown or expand the list
      
              cy.get('[data-testid="editionSwitch-menuItemLabel-nl"]') // Click on NL edition
            .click();
      
              // Verify that the page has navigated to the selected edition
              cy.url().should('include', 'https://www.upday.com/nl'); 
      });
});