describe('Upload', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/upload', 'Upload')
    
  })

  it('Deve efetuar upload de arquivo', () => {
    cy.get('input[name="doc"]')
      .selectFile('cypress/fixtures/upload/doc.pdf')
      // efetuando validação para garantir que no input name doc foi realmente anexado o arquivo doc.pdf
      .then(element => {
        expect(element[0].files[0].name).to.equal('doc.pdf')
      })
  })

  it('Deve efetuar upload de imagem', () => {
    cy.get('input[name="photo"]')
      .selectFile('cypress/fixtures/upload/liga.jpg')
      // efetuando validação para garantir que no input name photo foi realmente anexado o arquivo doc.pdf
    cy.get('#image-upload')
      .find('img')
      .should('be.visible')
      .should('have.attr', 'src')
      .and('include', 'blob')
  })


})
