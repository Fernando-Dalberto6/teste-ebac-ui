/// <reference types="cypress"/>


 describe('Funcionalidade: Login', () => {

    beforeEach(() => {
      cy.visit('minha-conta')
        
    });

    afterEach(() => {
        cy.screenshot()
    });
   it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('Osasco@gmail.com')
        cy.get('#password').type('Cachorro quente')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, osasco (não é osasco? Sair)')
        
        

        
    })
 })

 it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => { 
    cy.visit('minha-conta') 
    
    
    cy.get('#username').type('Carapicuiba@gmail.com')
    cy.get('#password').type('Cachorro quente')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    cy.get('.woocommerce-error').should('exist')
 
 });

 it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
    cy.visit('minha-conta')
   
    cy.get('#username').type('Osasco@gmail.com')
    cy.get('#password').type('Senha errada')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail Osasco@gmail.com está incorreta. Perdeu a senha?')
    
    
    
 });

 

   
   
   

    