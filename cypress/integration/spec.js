/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://tailwindcss.com/docs/width#class-reference')
    cy.get('.top-0')
  })
  it('breaks', () => {
    cy.visit('https://tailwindcss.com/docs/width#class-reference')
    cy.get('.top-1/2')
  })
})
