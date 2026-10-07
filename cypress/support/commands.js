Cypress.Commands.add('login', (user = 'standard_user', pass = 'secret_sauce') => {
  cy.session([user, pass], () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(user);
    cy.get('[data-test="password"]').type(pass);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });
  cy.visit('/inventory.html');
});