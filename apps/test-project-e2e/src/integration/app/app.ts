import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { getGreeting } from '../../support/app.po';

Given('I visit the main page', () => {
  cy.visit('/');
});

Then(`I see greeting {string}`, (greeting) => {
  getGreeting().contains(greeting);
});
