/// <reference types="cypress"/>

describe('Inserir itens no carrinho', ()=>{
    it('Deve inserir tres itens no carrinho com sucesso', ()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/product/abominable-hoodie/?attribute_size=XS&attribute_color=Blue')
        cy.get('.single_add_to_cart_button').click()
        cy.visit('http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/')
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.single_add_to_cart_button').click()
        cy.visit('http://lojaebac.ebaconline.art.br/product/ariel-roll-sleeve-sweatshirt/')
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.single_add_to_cart_button').click()
        cy.visit('http://lojaebac.ebaconline.art.br/carrinho/')

        cy.get(':nth-child(1) > .product-name > a').should('contain', 'Abominable Hoodie - XS, Blue')
        cy.get(':nth-child(2) > .product-name > a').should('contain', 'Ingrid Running Jacket - S, Orange')
        cy.get(':nth-child(3) > .product-name > a').should('contain', 'Ariel Roll Sleeve Sweatshirt - S, Purple')


    })
})