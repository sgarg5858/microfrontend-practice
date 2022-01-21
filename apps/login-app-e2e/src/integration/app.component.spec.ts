describe('login-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('microfrontends-demo-root').should('exist');
  });
});