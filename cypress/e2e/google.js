const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor')
let resultsFound
Given(`I open the browser page with the url {string}`, url => {
  cy.visit(url)
})
Given(
  `I click on {string} button I see the title {string} main page`,
  (coockiesBtn, title) => {
    cy.contains('button', coockiesBtn).should('be.visible').click()
    cy.title().should('eq', title)
  }
)
Given(
  `I type the search string {string} into the search input`,
  searchString => {
    cy.get('[name="q"]').type(searchString)
  }
)
Then(`I see the search suggesstions list`, () => {
  cy.get('ul[role="listbox"]').should('be.visible')
})
Then(`I click on {string} button`, searchBtn => {
  cy.contains('input', searchBtn).click()
})
Then(
  `I see the found results number should not be less than {int}`,
  resultsNok => {
    cy.parseResults().then(result => {
      expect(result).not.to.be.lessThan(resultsNok)
    })
  }
)
Then(`Results found number is greater than {int}`, resultsOk => {
  cy.parseResults().then(result => {
    expect(result).to.be.greaterThan(resultsOk)
  })
})
