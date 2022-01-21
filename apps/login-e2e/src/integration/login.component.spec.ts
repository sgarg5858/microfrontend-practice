describe('login', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logincomponent--primary'));
  it('should render the component', () => {
    cy.get('microfrontends-demo-login').should('exist');
  });
});