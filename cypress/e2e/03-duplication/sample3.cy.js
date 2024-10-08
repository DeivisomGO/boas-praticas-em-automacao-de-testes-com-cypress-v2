describe.skip('Code duplication bad practice - repetitive actions and assertions', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('searches for the same term 3 times', () => {
    cy.search('cypress.io')

    cy.get('.table-row')
      .its('length')
      .should('be.at.least', 1)

    cy.search('cypress.io')

    cy.get('.table-row')
      .its('length')
      .should('be.at.least', 1)

    cy.search('cypress.io')

    cy.get('.table-row')
      .its('length')
      .should('be.at.least', 1)
  })
})

describe('Duplicação de código - Ações e verificações repetitivas', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })
  it('Procura pelo mesmo termo três vezes', () => {
    Cypress._.times(3, () => {
      cy.search('cypress.io')

      cy.get('.table-row')
        .its('length')
        .should('be.at.least', 1)
    })
  })
})
