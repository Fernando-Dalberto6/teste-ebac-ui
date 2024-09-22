/// <reference types="cypress"/>

 describe('Funcionalidade: Login', () => {

    beforeEach(() => {cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        
        cy.get('.woocommerce-form > :nth-child(1) > label').type('Osasco@gmail.com')
        cy.get('.woocommerce-form > :nth-child(2) > label').type('Cachorro quente')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, osasco (não é osasco? Sair)')
    })
 })

 it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => { 
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    
    
    cy.get('.woocommerce-form > :nth-child(1) > label').type('Carapicuiba@gmail.com')
    cy.get('.woocommerce-form > :nth-child(2) > label').type('Cachorro quente')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error').should('exist')
 
 });

 it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    
    
    cy.get('.woocommerce-form > :nth-child(1) > label').type('Osasco@gmail.com')
    cy.get('.woocommerce-form > :nth-child(2) > label').type('Cachorro quente123')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail Osasco@gmail.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
    
 });