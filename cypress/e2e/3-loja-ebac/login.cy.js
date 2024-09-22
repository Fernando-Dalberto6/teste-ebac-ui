/// <reference types="cypress"/>
 describe('Funcionalidade: Login', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('.woocommerce-form > :nth-child(1) > label').type('Osasco@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > label').type('Cachorro quente')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, osasco (não é osasco? Sair)')
    })
 })