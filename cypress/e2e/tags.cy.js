describe('Tags', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/tags', 'Tags')
    
  })

  it('Deve adicionar tags', () => {
    const tags = ['Cypress', 'JavaScript', 'Nodejs']

    tags.forEach(addTags => {
      cy.get('.new-tag')
        // alterando as aspas para apostrophe nos permite informar a variavel ${addTags} e o para simular o enter do teclado, usamos a tag {enter}.
        .type(`${addTags}{enter}`)      
    })
    // aqui validamos que as tags foram adicionadas corretamente.
    tags.forEach(addTags => {
      cy.get('.tag-input')
        .should('contain', addTags)
    })
    
  })  

})
