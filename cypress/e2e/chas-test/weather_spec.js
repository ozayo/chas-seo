describe('Weather Component', () => {
  beforeEach(() => {
    // Tam URL'yi kontrol edelim
    cy.intercept('GET', '**/weather**', { fixture: 'weather.json' }).as('getWeather');
    cy.visit('/weather'); // BaseUrl tanımlandı, URL /weather ile çalışacak
  });

  it('Should render the weather component', () => {
    cy.get('[data-testid="weather-component"]').should('exist'); // Component render kontrolü
  });

  it('Should display weather data from the mock', () => {
    cy.wait('@getWeather'); // Mock veriyi bekleyelim
    cy.get('[data-testid="weather-component"]').within(() => {
      cy.contains('Temperature: 15°C'); // Fixture'dan gelen veriyi kontrol edelim
      cy.contains('Weather: clear sky');
      cy.contains('Humidity: 78%');
    });
  });

  it('Should display an error message on failed API call', () => {
    // API isteğinin başarısız olduğu senaryo
    cy.intercept('GET', '**/weather**', { statusCode: 404 }).as('getWeatherError');
    cy.visit('/weather');
    cy.wait('@getWeatherError');
    cy.contains('Error: Failed to fetch weather data'); // Hata mesajı kontrolü
  });

  it('Should handle timeout correctly', () => {
    // API isteğinin geciktiği senaryo
    cy.intercept('GET', '**/weather**', { delay: 10000, fixture: 'weather.json' }).as('getWeatherTimeout');
    cy.visit('/weather');
    cy.get('[data-testid="loading"]').should('exist'); // Yüklenme mesajı kontrolü
  });
});
