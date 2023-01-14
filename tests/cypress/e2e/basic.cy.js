describe('App testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/')
  })

  it('is should open/close modal', () => {
    cy.get('[data-target="#target"]')
      .click()
      .then((x) => {
        cy.get('div#target .js-modal-close')
          .click()
          .then((x) => {
            cy.get('#target').should('not.be.visible')
          })
      })
  })
})
