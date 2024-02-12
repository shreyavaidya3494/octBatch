describe('Home Page',()=>{

    it('Radio Button Test',()=>{


        cy.visit("http://127.0.0.1:5500/Cypress/Feb10/index.html")

        // Checking for gender radio button

        cy.get(':nth-child(1) > :nth-child(2) > input').should('be.visible') 
        // To check if female radio button is visible
        cy.get(':nth-child(1) > :nth-child(4) > input').should('be.visible')
         // To check if male radio button is visible


         //If male radio button gets selected, then female should not get selected in gender and vice versa. This is tested below-
         cy.get(':nth-child(1) > :nth-child(2) > input').check().should('be.checked') 
         cy.get(':nth-child(1) > :nth-child(4) > input').should('not.be.checked')

         //vice versa
         cy.get(':nth-child(1) > :nth-child(4) > input').check().should('be.checked') 
         cy.get(':nth-child(1) > :nth-child(2) > input').should('not.be.checked')

       //for marital status- here both are getting checked
       cy.get(':nth-child(2) > :nth-child(2) > input').check().should('be.checked') 
       cy.get(':nth-child(2) > :nth-child(4) > input').should('not.be.checked')

       cy.get(':nth-child(2) > :nth-child(4) > input').check().should('be.checked') 
       cy.get(':nth-child(2) > :nth-child(2) > input').should('not.be.checked')

    });
})