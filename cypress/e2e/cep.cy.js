describe('CEP', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/cep', 'CEP (API dos Correios)')
    
  })

  it('Deve efetuar a consulta do CEP 04534011 com api dos correios retornando com sucesso', () => {
    cy.get('input[name="cep"]').type('04534011')
    cy.contains('button', 'Cadastrar').click()

    cy.get('input[name="logradouro"]', {timeout: 6000})
      .should('have.value', 'Rua Joaquim Floriano')
    
    cy.get('input[name="cidade"]')
      .should('have.value', 'São Paulo')
    
    cy.get('input[name="estado"]')
      .should('have.value', 'SP')
    
  } )

  it.only('Deve efetuar a consulta na rota Mockada', () => {

    const massaMock = {
      cep: '11706170',
      logradouro: 'Rua São João',
      localidade: 'Praia Grande',
      uf: 'SP'
    }
    
    cy.intercept('GET', `https://viacep.com.br/ws/${massaMock.cep}/json/`, {
      statusCode: 200,
      body: massaMock
    });

    cy.get('input[name="cep"]').type(massaMock.cep);
    cy.contains('button', 'Cadastrar').click()

    cy.get('input[name="logradouro"]', {timeout: 6000})
      .should('have.value', massaMock.logradouro)
    
    cy.get('input[name="cidade"]')
      .should('have.value', massaMock.localidade)
    
    cy.get('input[name="estado"]')
      .should('have.value', massaMock.uf)
    
  } )

})
