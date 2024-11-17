/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit ('produtos')
});

describe('Funcionalidade: produtos', () => {
    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains('Aero Daily Fitness Tee')
        .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });
});