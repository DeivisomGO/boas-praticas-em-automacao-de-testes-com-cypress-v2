describe('Má prática - Duplicação de código', () => {
  beforeEach(() => {
    cy.visit('https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html')
  })
 
  it('Marcar todos os checkboxes - Má prática', () => {
    cy.get('#friend').check()
    cy.get('#publication').check()
    cy.get('#social-media').check()
  })
})

describe('Boa prática - Duplicação de código', () => {
  beforeEach(() => {
    cy.visit('https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html')
  })
 
  it('Marcar todos os checkboxes - boa prática', () => {
    cy.get('fieldset div input[type="checkbox"]').check()
  })
})