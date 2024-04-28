Cypress.Commands.add('login', ()=>{
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.get('.rprof > p').click()
    cy.get(':nth-child(5) > .imail').type("Marrivva@gmail.com")
    cy.get('.ipass').type("M9999M")
    cy.get('.avtorization > .input-shablon > .form-button').click()
}
)
