// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goHome', () => {
  // viewport configurado no arquivo cypress.config.js.
  //cy.viewport('iphone-xr')
  //cy.viewport('samsung-s10')
  // caminho absoluto (url completa) está configurado no arquivo cypress.config.js como baseUrl.
  cy.visit('/login')
  cy.contains('h2', 'Faça login')
    .should('be.visible')
  
})

Cypress.Commands.add('login', (email, password) => {
  if (email) {
    cy.get('[data-cy="email"]').type(email)  
  }
  if (password) {
    cy.get('[data-cy="password"]').type(password)
  }  
  cy.get('[data-cy="login-button"]').click()

})

const env = require('../../env'); // dados env.js

Cypress.Commands.add('sucessLogin', () => {
  cy.login(env.email, env.password); // Usa os valores de env.js
  cy.wellcome();
});

Cypress.Commands.add('failEmail', () => {
  cy.login(env.emailErrado, env.password); // Usa os valores de env.js
});

Cypress.Commands.add('failKey', () => {
  cy.login(env.email, env.senhaErrada); // Usa os valores de env.js
});

Cypress.Commands.add('failKeyMin', () => {
  cy.login(env.email, env.senhaErrMin); // Usa os valores de env.js
});



Cypress.Commands.add('wellcome', () => {
  cy.get('[data-cy="welcome-title"]')
  .should('be.visible')
  .and('have.text', 'Boas vindas ao Cypress Playground')
})

Cypress.Commands.add('noticeHave', (message) => {
  cy.get('.notice h4')
  .should('be.visible')
  .and('have.text', 'Oops!')
  
  cy.get('.notice p')
    .should('be.visible')
    .and('have.text', message)

})

Cypress.Commands.add('goTo', (route, title) => {
  cy.get(`nav a[href="${route}"]`)
      .click()
    cy.contains('h2', title)
      .should('be.visible')
})