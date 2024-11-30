describe('Checkbox', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/checkbox', 'Checkbox')    
  })

  it('Deve selecionar checkbox das linguagens que usam Node.js', () => {
    cy.get('label[for="javascript"]')
      .click()

    cy.get('label[for="typescript"]')
    .click()
  })


  it('Deve selecionar todos os checkbox', () => {
    
    const langs = ['javascript', 'python', 'rust', 'go', 'typescript']
    
    langs.forEach(lang => {
      cy.get(`label[for=${lang}]`).click()
    })
    
  })
  

})
