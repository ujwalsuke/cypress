


it('google search', ()=>{
    cy.visit('https://google.com');
    //cy.get('.SDkEP').type('Automation Step by Step{Enter}');
    cy.get('.SDkEP',{timeout: 5000}).type('Automation Step by Step');
    cy.wait(2000);
    cy.contains('Google Search').click();

})