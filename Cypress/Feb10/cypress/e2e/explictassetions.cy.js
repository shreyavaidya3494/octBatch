describe('explicit test suite',()=>
{
    it('heading test',()=>
    {
        let heading_name="This is My Project"
        cy.visit("http://127.0.0.1:5500/Cypress/Jan31/index.html")
        cy.get('#heading').then((ele)=>
        {
            let web_heading=ele.text();
            expect(heading_name).to.equal(web_heading)
            //or
            assert.equal(heading_name,web_heading)
            //expect and asset can be used for explicit assertion
        })
    })
})