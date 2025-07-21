describe('Login Test - SauceDemo', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Verifica se foi redirecionado para a página de produtos
    cy.url().should('include', '/inventory.html');
    cy.contains('Products');
  });
});
