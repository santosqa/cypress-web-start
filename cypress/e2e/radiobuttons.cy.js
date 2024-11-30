describe('Radio Buttons', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/radio', 'Radio Buttons')
    
  })

  it('Deve escolher Robot Framework', () => {
    cy.contains('label', 'Robot Framework')
      .click()

  })


})
