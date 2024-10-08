describe('Teste lento - Má prática', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear()
  })

  it('searches by typing and hitting enter', () => {
    cy.get('@searchField')
      .type('frontend testing{enter}')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })
})

const { hits } = require('../../fixtures/stories.json')
describe('Teste lento - BOA prática - Usando fixtures', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      {fixture: 'stories'}
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')

    cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'redux')
      .as('searchField')
      .clear()
  })

  it('searches by typing and hitting enter', () => {
    cy.get('@searchField')
      .type('frontend testing{enter}')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', hits.length)
  })
})