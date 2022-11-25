/// <reference types="Cypress" />

describe('Software Integration Test', () => {
  before(() => cy.visit('http://localhost:3000/customers'))

  it('Should redirect to add new customer page', () => {
    cy.get('[data-cy="new-customer"]').click()
    cy.contains('NOVO CLIENTE')
    cy.url().should('include', '/customers/add')
  })

  it('Should add a new customer', () => {
    cy.get('input[name="name"]').should('have.value', '')
    cy.get('[data-cy="form-name"]').type('Vinicius Vieira Parizoto')
    cy.get('input[name="name"]').should('have.value', 'Vinicius Vieira Parizoto')

    cy.get('input[name="rg"]').should('have.value', '')
    cy.get('[data-cy="form-rg"]').type('132163880')
    cy.get('input[name="rg"]').should('have.value', '13.216.388-0')

    cy.get('input[name="shippingDate"]').should('have.value', '')
    cy.get('[data-cy="form-shippingDate"]').type('02021998')
    cy.get('input[name="shippingDate"]').should('have.value', '02/02/1998')

    cy.get('input[name="issuingBody"]').should('have.value', '')
    cy.get('[data-cy="form-issuingBody"]').click()
    cy.get('[data-cy="form-select-FGTS"]').click()
    cy.get('input[name="issuingBody"]').should('have.value', "FGTS")

    cy.get('[data-cy="form-masc"]').should('have.css', 'color', 'rgb(33, 33, 33)').should('have.css', 'border', '2px solid rgb(33, 33, 33)')
    cy.get('[data-cy="form-fem"]').should('have.css', 'color', 'rgb(33, 33, 33)').should('have.css', 'border', '2px solid rgb(33, 33, 33)')
    cy.get('[data-cy="form-masc"]').click()
    cy.get('[data-cy="form-masc"]').should('have.css', 'color', 'rgb(25, 118, 210)').should('have.css', 'border', '2px solid rgb(25, 118, 210)')

    cy.intercept('POST', '**/customers').as('newCustomer')

    cy.get('[data-cy="form-submit"]').click()
    cy.wait('@newCustomer')
    cy.url().should('include', '/customers')
  })

  it('Should redirect to edit customer page', () => {
    cy.get('[data-cy="edit-customer"]').first().click()

    cy.contains('EDITAR CLIENTE')

    cy.url().should('include', '/customers/edit')
  })

  it('Should edit customer', () => {
    cy.get('input[name="name"]').clear().should('have.value', '')
    cy.get('[data-cy="form-name"]').type('Fernando Conselhos')
    cy.get('input[name="name"]').should('have.value', 'Fernando Conselhos')

    cy.get('input[name="rg"]').clear().should('have.value', '')
    cy.get('[data-cy="form-rg"]').type('888888888')
    cy.get('input[name="rg"]').should('have.value', '88.888.888-8')

    cy.get('input[name="shippingDate"]').clear().should('have.value', '')
    cy.get('[data-cy="form-shippingDate"]').type('31122000')
    cy.get('input[name="shippingDate"]').should('have.value', '31/12/2000')

    cy.get('[data-cy="form-issuingBody"]').click()
    cy.get('[data-cy="form-select-SJTS"]').click()
    cy.get('input[name="issuingBody"]').should('have.value', 'SJTS')

    cy.get('[data-cy="form-fem"]').click()
    cy.get('[data-cy="form-fem"]').should('have.css', 'color', 'rgb(25, 118, 210)').should('have.css', 'border', '2px solid rgb(25, 118, 210)')

    cy.get('[data-cy="form-submit"]').click()
    cy.url().should('include', '/customers')
  })

  it('Should delete the customer', () => {
    cy.get('[data-cy="delete-customer"]').first().click()
    cy.get('[data-cy="confirm-customer"]').click()
  })
})
