describe('IFrame', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/iframe', 'IFrame')
    
  })

  it('Deve preencher os campos em uma página com iFrame', () => {
    cy.get('[data-cy="iframe-inputs"]')
      .then(($iframe) => {
        const body = $iframe.contents().find('body')

        cy.wrap(body)
          .find('#fullname')
          .type('Ricardo Santos QA')
        
        cy.wrap(body)
          .find('input[name="email"]')
          .type('test@santosqa.com')
        
        cy.wrap(body)
          .find('input[placeholder="12345"]')
          .type('123456')
        
        cy.wrap(body)
          .find('[data-cy="date"]')
          .type('2024-01-01')
      })
      
  })

})
