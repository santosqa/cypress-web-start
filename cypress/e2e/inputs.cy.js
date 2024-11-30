describe('Inputs Fields', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/input-fields', 'Input Fields')
    
  })

  it('Deve preencher formulário com sucesso', () => {
    cy.get('#fullname').type('Ricardo Santos QA')
    cy.get('input[name="email"]').type('test@santosqa.com')
    cy.get('input[placeholder="12345"]').type('123456')
    cy.get('[data-cy="date"]').type('2024-01-01')
  })


})

