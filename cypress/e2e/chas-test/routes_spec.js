describe('Application Routes', () => {
  it('Should navigate to the Home page', () => {
    cy.visit('/'); // Ana sayfayı ziyaret et
    cy.url().should('include', '/'); // URL kontrolü
    cy.get('h1').should('contain', 'Chas'); // h1 have Chas content?

    // Bileşenlerin yüklendiğini kontrol edelim
    cy.get('[data-testid="main-hero"]').should('exist'); // MainHero bileşeni
    
  });

  it('Should navigate to the About page', () => {
    cy.visit('/about'); // About sayfasını ziyaret et
    cy.url().should('include', '/about'); // URL kontrolü
    cy.get('h1').should('contain', 'About'); // Başlık kontrolü
  });

  it('Should navigate to the Project page', () => {
    cy.visit('/project'); // Project sayfasını ziyaret et
    cy.url().should('include', '/project'); // URL kontrolü
    cy.get('h1').should('contain', 'Project'); // Başlık kontrolü
  });

  it('Should navigate to the Contact page', () => {
    cy.visit('/contact'); // Contact sayfasını ziyaret et
    cy.url().should('include', '/contact'); // URL kontrolü
    cy.get('h1').should('contain', 'Contact'); // Başlık kontrolü
  });

  it('Should navigate to the Weather page', () => {
    cy.visit('/weather'); // Weather sayfasını ziyaret et
    cy.url().should('include', '/weather'); // URL kontrolü
    cy.get('h1').should('contain', 'Weather'); // Başlık kontrolü
  });
});
