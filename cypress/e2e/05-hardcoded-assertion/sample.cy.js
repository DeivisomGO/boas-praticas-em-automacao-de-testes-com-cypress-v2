describe('Hardcoded assertion bad practice', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('Pesquisa', () => {
    cy.fixture("stories.json")
    cy.get('input')
      .type('cypress.io')

    cy.get('.table-row')
      .as('tableRows')
      .should('have.length', 3)
    cy.get('@tableRows')
      .eq(0)
      .should('contain', 'Dom Casmurro')
    cy.get('@tableRows')
      .eq(1)
      .should('contain', 'Pequeno Príncipe')
  })
})

describe('Hardcoded assertion - Boa prática 01', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('Pesquisa 01', () => {
    cy.fixture("stories.json")
      .then(({ hits }) => {
    cy.get('input')
      .type('cypress.io')

    cy.get('.table-row')
      .as('tableRows')
      .should('have.length', hits.length)
    
    hits.forEach((hit, index) => {
      cy.get('@tableRows')
        .eq(index)
        .should('contain', hit.title)
      })
    })
  })
})

describe('Hardcoded assertion - Boa prática 02', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  const { hits } = require('../../fixtures/stories.json')
  it.only('Pesquisa 02', () => {
    cy.get('input').clear()
      .type('cypress.io')

    cy.get('.table-row')
      .as('tableRows')
      .should('have.length', hits.length)
    
    hits.forEach((hit, index) => {
      cy.get('@tableRows')
        .eq(index)
        .should('contain', hit.title)
      })
    })
})