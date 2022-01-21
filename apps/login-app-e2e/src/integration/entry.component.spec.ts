describe('login-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=remoteentrycomponent--primary'));
  it('should render the component', () => {
    cy.get('microfrontends-demo-login-app-entry').should('exist');
  });
});