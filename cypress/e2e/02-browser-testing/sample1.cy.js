describe('Má prática - Browser testing - anchor href', () => {
  it('Má prática - Browser testing', () => {
    cy.visit('https://notes-serverless-app.com')
    cy.contains('.nav a', 'Login').click()
    cy.url().should('be.equal', 'https://notes-serverless-app.com/login')
  })
})

describe('Boa prática - Browser testing - anchor href', () => {
  it('Boa prática - Browser testing', () => {
    cy.visit('https://notes-serverless-app.com')
    cy.contains('.nav a', 'Login')
      .should('have.attr', 'href', '/login')
  })
})