describe('Textarea', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/textarea', 'Textarea')
    
  })

  it('Deve preencher campo textarea com sucesso', () => {
    cy.get('textarea[name="message"]')
      .type('Adicionar um parágrafo ou uma frase...')
  })


})
