describe('Date Picker', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/date-picker', 'Date Picker')
    
  })

  it('Deve selecionar a data do natal.', () => {
    cy.get('input[placeholder="Escolha uma data"][readonly]')
      .click()

    cy.get('select[aria-label="Month"]')
      .select('Dezembro')

    cy.get('input[aria-label="Year"]')
      .type('2024')

    cy.get('span[aria-label="Dezembro 25, 2024"]')
      .click()
  })  

})
