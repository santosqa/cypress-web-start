describe('Tables', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/tables', 'Tables')
    
  })

  it('Deve selecionar a linha da tabela referente ao Linkedin', () => {
    cy.contains('tr', '1003')
      .should('be.visible')
      .and('contain', 'Linkedin')
      .and('contain', 'papitodev')
      .and('contain', 'Ativo')
      .and('contain', 'Visitar')     
  }) 

  it('Deve desistir de cancelar a linha da tabela referente ao Linkedin', () => {
    cy.contains('tr', '1003')
      .find('.remove-item')
      .click()
    
      cy.contains('button', 'Cancelar')
        .click()
        .wait(100)

      cy.contains('tr', '1003')
      
  })   
  
  it('Deve remover a linha da tabela referente ao Linkedin', () => {
    cy.contains('tr', '1003')
      .find('.remove-item')
      .click()
    
      cy.contains('button', 'Excluir')
        .click()
        .wait(100)

      cy.get('table tbody')
        .should('not.contain', '1003')     
      
  })   

  it('Deve validar o link que abre nova pagina referente ao instagram', () => {
    const idInstagram = 'instapapito'
    
      cy.contains('table tbody tr', idInstagram)
        .contains('a', 'Visitar')
        .should('have.attr', 'href', 'https://instagram.com/instapapito')
        .and('have.attr', 'target', '_blank')
  })


})
