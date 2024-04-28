import"../fixtures/testdata.json"
import"../support/mycommands"


describe('registration test case', ()=>{
    it('register user', ()=>{
     cy.visit('https://testzootopia.loremipsum.ge/ka')
     cy.get('.rprof > p').click()
     cy.get('.input-shablon > p > a').click()
     cy.get(':nth-child(1) > .ismile').type('Mar Ivaneishvili')
     cy.get('.ipir').type('62001102525')
     cy.get(':nth-child(2) > .imail').type('Marrivva@gmail.com')
     cy.get(':nth-child(4) > .itel').type('557885558')
     cy.get(':nth-child(5) > .ipass').type('M9999M')
     cy.get('.reg-form-left > :nth-child(6) > .ipass').type('M9999M')
     cy.get('#Group_15422').click()
     cy.get('.regsub').click()
 })
 })
 
 

 describe('authotization test case', ()=>{
    it('authotization', ()=>{
     cy.login()
 })
 })



 describe('addtocart test case', ()=>{
    it('addtocart', ()=>{
        cy.login()
        cy.get('.pug > .seepro').click()
        cy.get(':nth-child(1) > .price-cart > .product-cart').click()
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
        cy.get('.cart-item').should('exist')
 })
 })


 describe('removefromcart test case', ()=>{
    it('removefromcart', ()=>{
     cy.login()
     cy.get('.pug > .seepro').click()
     cy.get(':nth-child(1) > .price-cart > .product-cart').click()
     cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
     cy.get('.cart-item').should('exist')
     cy.get('.clear > a').click()
     cy.get('.empty').should('exist')
 })
 })


 describe('order test case', ()=>{
    it('order', ()=>{
     cy.login()
     cy.get('.pug > .seepro').click()
     cy.get(':nth-child(1) > .price-cart > .product-cart').click()
     cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
     cy.get('.cart-item').should('exist')
     cy.get('#own-delivery').click()
     cy.get('[for="gadaxda2"]').click()
     cy.get('.cart-submit').click()

 })
 }) 

describe('logout test case', ()=>{
it('logout', ()=>{
   cy.login()
   cy.get('.pug > .seepro').click()
   cy.get(':nth-child(1) > .price-cart > .product-cart').click()
   cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
   cy.get('.cart-item').should('exist')
   cy.get('.menu-pop > .iprof > p').click()
   cy.get('.logout-mobile').click()
   cy.get('.rprof > p').click()
   cy.get(':nth-child(5) > .imail').type("Marrivva@gmail.com")
   cy.get('.ipass').type("M9999M")
   cy.get('.avtorization > .input-shablon > .form-button').click()
   cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
   cy.get('.cart-item').should('exist')
})
})
