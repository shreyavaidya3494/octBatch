describe("Flipkart test suite",()=>
{
    it("Checking test cases for Flipkart",()=>
    {
        cy.visit("https://www.flipkart.com/")
        cy.url().should('eq',"https://www.flipkart.com/")
        .and('contain','wwe')
        .and('contain',"www")
        .and('include','mercedez')

        
    })

    it("Checking sub tags for flipkart",()=>
    {
        cy.visit("https://www.flipkart.com/")
        cy.url().should('eq',"https://www.flipkart.com/")
    cy.get('[data-observerid-7d8a2fea-7657-40a4-a218-05e70372b54a="19098757-a1b4-4224-93c8-b9228f179ef7"] > .YBLJE4 > ._1XjE3T > span')
    .should('contain','Grocery')
    })

})