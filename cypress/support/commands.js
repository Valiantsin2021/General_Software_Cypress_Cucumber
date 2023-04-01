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
Cypress.Commands.add('parseResults', () => {
  cy.get('#result-stats').should('exist').and('be.visible')
  cy.get('#result-stats')
    .invoke('text')
    .then(text => {
      return parseInt(
        text
          .replace('Aproximadamente', '')
          .replace('About', '')
          .replaceAll('.', '')
          .replaceAll(',', '')
      )
    })
})
