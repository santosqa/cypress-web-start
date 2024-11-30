describe('Select (Combobox)', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/select', 'Select')
    
  })

  it('Deve selecionar um Framework de Testes', () => {
    cy.contains('label', 'Selecione um Framework de Testes')
      .parent()
      .find('select')
      .select('Robot Framework')

  })
  it('Deve selecionar Caixa de múltipla escolha', () => {
    cy.get('input[placeholder^="Linguagens de programação"]')
      .click()
      
      const langs = ['Java', 'Rust']

      langs.forEach(lang => {
        // usando o regex, expressão regular para encontrar o texto único. a Exemplo de Java e javaScript, ambos contém java no nome e a expressão -> new RegExp("^" + variavelDeNomes + "$"), fa´ra escolher correto.
        cy.contains('.option-item', new RegExp("^" + lang + "$"))
          .click()
      });

      // validando a quantidade de linguagens que foi selecionada.
      cy.get('.language-item')
        .should('have.length', langs.length)

  })



})
