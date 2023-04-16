import { Login } from "./pages/login_page"

const loginPage = new Login();

describe('POM  test grouping', ()=>{
    it.only('POM DEMO 1', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
       
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    
        // cy.get('.oxd-button').click()
    
        loginPage.enterUsername('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
    })

    it('POM DEMO 2', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
       
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    
        // cy.get('.oxd-button').click()
    
        loginPage.enterUsername('Admin1');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
    })
    
})
