describe('template spec_a', () => {
  it('passes_a1', () => {
    cy.visit('https://example.cypress.io')
  })

  it('passes_a2', () => {
    cy.visit('https://chat.openai.com/auth/login')
  })
})