describe('Dados sensíveis - Má prática', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('Preencher o formulário e mostrar dados sensíveis', () => {
    cy.get('#email').type('joe@example.com')
    cy.get('#password').type('s3Cr€7-p@s5w0rd')
  })
})

describe('Dados sensíveis - Boa prática', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com/login')
  })

  it('Preencher o formulário ocultando dados sensíveis', () => {
    cy.get('#email').type(Cypress.env('user_email'), { log: false })
    cy.get('#password').type(Cypress.env('user_password'), { log: false })
  })
})