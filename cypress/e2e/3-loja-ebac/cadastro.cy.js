/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });
    it('Deve completar o cadastro com sucesso', () => {
        cy.get('.register > :nth-child(1) > label').type(faker.internet.email())
        cy.get('#reg_password').type('4321')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('.form-row-first > label').type(faker.person.firstName())
        cy.get('.form-row-last > label').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' ,'Detalhes da conta modificados com sucesso.')
    
   });

   it('Deve completar o cadastro com sucesso - usando variáveis', () => {
    var nome = faker.person.firstName()
    var email = faker.internet.email(nome)
    var sobrenome = faker.person.lastName()

    cy.get('.register > :nth-child(1) > label').type(email)
    cy.get('#reg_password').type('4321')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('.form-row-first > label').type(nome)
    cy.get('.form-row-last > label').type(sobrenome)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain' ,'Detalhes da conta modificados com sucesso.')

});

});
