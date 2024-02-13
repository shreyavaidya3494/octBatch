describe("Test suite for index.html", () => {
  it("Test case for index.html- Heading", () => {
    cy.visit("http://127.0.0.1:5500/Cypress/Jan31/index.html")
    cy.url("eq","http://127.0.0.1:5500/Cypress/Jan31/index.html")
    cy.get('#heading').should("be.visible").and('not.have.length',17)
    cy.get(".heading2").should("be.visible")
    cy.get(".heading2").should("not.be.visible")
  }
  )
})


describe("Test suite for Amazon website",()=>
{
  it("Test case for Amazon to check if website name is correctly mentioned", ()=>
  {
    cy.visit("https://www.amazon.in/")
    cy.url("eq","https://www.amazon.in/")
    cy.get('[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]').should('contain',"Best Sellers")
    cy.get('[href="/minitv?ref_=nav_avod_desktop_topnav"]').should('contain',"TV")
    //cy.get('#nav-logo-sprites').should('contain','amazon')
  })
})