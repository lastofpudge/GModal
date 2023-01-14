describe('App testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/')
  })

  it('is should open modal', () => {
    cy.get('[data-target="#target"]')
      .click()
      .then(() => {
        cy.get('#target .g-modal__layout').should('be.visible')
      })
  })

  it('is should close modal', () => {
    cy.get('[data-target="#target"]')
      .click()
      .then(() => {
        cy.get('div#target .js-modal-close')
          .click()
          .then(() => {
            cy.get('#target').should('not.be.visible')
          })
      })
  })
})
