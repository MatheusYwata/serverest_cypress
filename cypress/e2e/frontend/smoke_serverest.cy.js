describe('Smoke test - ServeRest front', () => {
  it('deve abrir a página inicial', () => {
    cy.visit('https://front.serverest.dev');
    cy.contains('Login').should('be.visible');
  });
});
