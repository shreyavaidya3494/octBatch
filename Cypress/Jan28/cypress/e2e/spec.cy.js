describe("registration test", function()
{
  it("username test", function()
  {
    cy.visit("http://127.0.0.1:5500/Cypress/Jan28/index.html")
    cy.get("button").click()
    cy.get('[name="username"]').type("Shreya")
    cy.get('.inp_2').type("123456789")
    cy.get('#sub_btn').click()
  })


//implicit assertions
//1. should
//2. and

it("test- implicit assertion", ()=>
{
 cy.visit("http://127.0.0.1:5500/Cypress/Jan28/index.html")
 cy.url().should('eq',"http://127.0.0.1:5500/Cypress/Jan28/index.html")
 cy.url().should('not.eq',"http://127.0.0.1:5500/Cypress/Jan28/index.html")
 cy.url().should('contain',"index")
 cy.url().should('include',"5000")

  //or
  //this can be done like this also
  cy.visit("http://127.0.0.1:5500/Cypress/Jan28/index.html")
  cy.url().should('eq',"http://127.0.0.1:5500/Cypress/Jan28/index.html")
  .should('not.eq',"http://127.0.0.1:5500/Cypress/Jan28/index.html")
  .should('contain',"index")
  .should('include',"5000")

//can use and also instead of should
})

})
