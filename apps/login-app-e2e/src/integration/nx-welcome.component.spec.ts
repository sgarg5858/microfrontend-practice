describe('login-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('microfrontends-demo-nx-welcome').should('exist');
  });
});