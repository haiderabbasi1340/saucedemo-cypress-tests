describe('SauceDemo checkout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
   
  });

  it('completes an end-to-end purchase', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="inventory-item-name"]')
      .should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('Test');
    cy.get('[data-test="lastName"]').type('User');
    cy.get('[data-test="postalCode"]').type('44000');
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="subtotal-label"]').should('contain', '29.99');
    cy.get('[data-test="finish"]').click();

  
  });
});
