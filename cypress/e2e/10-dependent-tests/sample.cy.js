describe('Dependent tests bad practice', () => {
  beforeEach(() => {
    cy.visit('http://notes-serverless-app.com')

    cy.get('.navbar-nav a:contains(Login)').click()

    cy.get('#email').type(Cypress.env('user_email'))
    cy.get('#password').type(Cypress.env('user_password'), { log: false })
    cy.get('button[type="submit"]').click()
    
    cy.contains('h1', 'Your Notes').should('be.visible')
  })

  it('creates a note', () => {
    cy.contains('Create a new note').click()

    cy.get('#content').type('My note')
    cy.contains('Create').click()

    cy.get('.list-group').should('contain', 'My note')
  })

  it('edits a note', () => {
    cy.get('.list-group').contains('My note').click()
    cy.get('#content').type(' updated')
    cy.contains('Save').click()

    cy.get('.list-group').should('contain', 'My note updated')
    cy.get('.list-group:contains(My note updated)').should('be.visible')
  })

  it('deletes a note', () => {
    cy.get('.list-group').contains('My note updated').click()
    cy.contains('Delete').click()

    cy.get('.list-group:contains(My note updated)').should('not.exist')
  })
})

describe('Criar um teste CRUD de um usuário', () => {
  it('CRUD de um usuário', () => {
    // Passos para criar o usuário

    // Verificar que o usuário foi criado

    // Passos para ler o usuário criado pelo teste anterior

    // Verificar que o usuário existe

    // Passos para atualizar o usuário lido no teste anterior

    // Verificar que o usuário foi atualizado

    // Passos para deletar o usuário atualizado no teste anterior

    // Verificar que o usuário foi deletado
  })
})
