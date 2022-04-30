/// <reference types="cypress" />

context("Index page", () => {
/*     beforeEach(() => {
    }) */
    
    it("Add todo", () => {
        cy.visit("http://localhost:3000")
        const title = 'Testing adding todos with Cypress'
        const description = 'A test for cypress'

        const email = "cypresstest123@gmail.com"
        const password = "Cypress123*"

        cy.contains('Log In').click()

        cy.get('#username').type(`${email}{enter}`)
        cy.get('#password').type(`${password}{enter}`)

        cy.get('#formBasicTitle').type(`${title}{enter}`)
        cy.get('#formBasicDescription').type(`${description}{enter}`)
    })
})