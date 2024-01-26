// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })


describe("registration test", function(){

  it("username test", function(){
      cy.visit("http://127.0.0.1:5500/Cypress/Jan26/index.html") //test case to visit index.html DOM link
      cy.get("button").click() //test case to check whether it displays the message "the button has been clicked 
      //when user/automation tool clicks the button"
  })

})