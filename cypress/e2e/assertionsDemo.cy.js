

it('Assertion Demo', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();

    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class','query-btn')
    .and('be.visible')
    .and('be.enabled')
    

    expect(true).to.be.true;

    let name = 'cypress';

    expect(name).to.be.a('string');
    
    expect(name).to.be.equal('cypress');

    assert.equal(4,4,'Not Equal');
    
    // assert.equal(4,5,'Not Equal');
    
    assert.equal(4,'4','Not Equal');
    
    // assert.strictEqual(4,'4','Not Equal');
  })