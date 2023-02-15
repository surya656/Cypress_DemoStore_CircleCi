///<reference types="Cypress"/>

import faker from 'faker'

context('Sign Up', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    specifiy('User signs up', () => {
        cy.visit('');
        cy.get('input[name=email]')
          .type(email);
        cy.get('input[name=password]')
          .type(password);
     });
  });


