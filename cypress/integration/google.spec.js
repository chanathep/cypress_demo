describe('Google search test', () => {
  it('should have a search bar', () => {
    cy.visit('https://www.google.com');
    cy.get('input[name="q"]').should('be.visible');
  });
});
