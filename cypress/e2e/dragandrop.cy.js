describe('Drag and Drop', () => {
  beforeEach(() => {
    cy.goHome()
    cy.sucessLogin()
    cy.goTo('/tasks', 'Task Board')
    
  })

  it('Deve arrastar o item da coluna ToDo e soltar na coluna Done', () => {
    const task = 'Desenho do Wireframe'

    const dataTransfer = new DataTransfer()
    
    cy.contains('div[draggable="true"]', task)
      .trigger('dragstart', { dataTransfer })

    cy.contains('h4', 'Done')
      .parent()
      .trigger('drop', { dataTransfer })
    
      //valida que nao tem mais a tarefa ma coluna ToDo
    cy.contains('h4', 'ToDo')
      .parent()
      .find('div[draggable="true"]')
      .each(($el) => {
        cy.wrap($el).should('not.contain.text', task);
      });
    
      //valida que tem a tarefa na coluna Done
    cy.contains('h4', 'Done')
      .parent()
      .contains('div[draggable="true"]', task)
      .should('be.visible')
  })

})
