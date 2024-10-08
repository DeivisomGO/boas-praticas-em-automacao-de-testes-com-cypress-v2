import { faker } from '@faker-js/faker'

// describe('Flaky tests - Má prática', () => {
//   beforeEach(() => {
//     cy.visit('https://wlsf82-hacker-stories.web.app')

//     cy.contains('p','Loading ...')
//       .should('be.visible')
//     cy.contains('p','Loading ...')
//       .should('not.exist')
//   })

//   Cypress._.times(10, () => {
//     it('shows a max of 5 buttons for the last searched terms', () => {
//       Cypress._.times(6, () => {
//         cy.search(faker.word.words())
//       })

//       cy.contains('p','Loading ...')
//         .should('be.visible')
//       cy.contains('p','Loading ...')
//         .should('not.exist')

//       cy.get('.last-searches button')
//         .should('have.length', 5)
//     })
//   })
// })

describe('Flaky tests - Boa prática (sem fixture)', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')
    cy.visit('https://wlsf82-hacker-stories.web.app')

    cy.wait('@getStories')
  })

  Cypress._.times(10, () => {
    it('Mostrar as 5 últimas pesquisas', () => {
      Cypress._.times(6, () => {
        cy.search(faker.word.words())
      })

      cy.wait('@getStories')

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})

describe('Flaky tests - Boa prática (com fixture)', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories'}
    )
    cy.visit('https://wlsf82-hacker-stories.web.app')
  })

  Cypress._.times(10, () => {
    it('Mostrar as 5 últimas pesquisas (com fixture)', () => {
      Cypress._.times(6, () => {
        cy.search(faker.word.words())
      })

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})