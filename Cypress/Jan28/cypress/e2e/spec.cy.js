describe("registration test", ()=>
{
  it("username test", ()=>
  {
    cy.visit("http://127.0.0.1:5500/Cypress/Jan28/index.html")
    cy.get("button").click()
    cy.get('[name="username"]').type("Shreya")
    cy.get('.inp_2').type("123456789")
    cy.get('#sub_btn').click()
  })
})

//implicit assertions
//1. should
//2. and
describe("implicit assertion testing for index html", ()=>
{
//case1: All conditions true- then final result of testing is pass
it("test index.html- implicit assertion", ()=>
{
 cy.visit("http://127.0.0.1:5500/Cypress/Jan28/index.html")
 cy.url().should("eq","http://127.0.0.1:5500/Cypress/Jan28/index.html")
 cy.url().should("not.eq","http://127.0.0.1:55900/Cypress/Jan28/index.html")
 cy.url().should("contain","index")
 cy.url().should("include","5500")
})
})

  //or
  //this can be done like this also
  describe("myHomeProject",()=>
  {
  it("myhome website implicit assertion",()=>
  //case2: All conditions true, one false- then final result of testing is fail, .should.should
  {
  cy.visit("https://www.myhomeconstructions.com/")
  cy.url().should('eq',"https://www.myhomeconstructions.com/")
  .should('not.eq',"navadweepa")
  .should('contain',"house")
  .should('include',"constructions")
  })
}
  )
//case3: All conditions true- then final result of testing is pass-.should.and
describe("Tatamotors test suit" ,()=>
{
it("Tatamotors implict test1",()=>
{
  cy.visit("https://www.tatamotors.com/")
  cy.url().should('eq',"https://www.tatamotors.com/")
  .and('not.eq',"https://www.google.com/")
  .and('contain','bakery')
  .and('include','tatamotors')
})
it("Tatamotors implict test2",()=>
{
  cy.visit("https://www.tatamotors.com/")
  cy.url().should('contain',"www")
}
)

//can use and also instead of should
})


