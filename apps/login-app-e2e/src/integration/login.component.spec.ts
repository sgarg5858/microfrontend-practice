describe('login-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logincomponent--valid-form'));
  it('should render the component', () => {
    cy.get('microfrontends-demo-login').should('exist');
  });
});