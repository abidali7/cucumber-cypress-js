import './helper.js'
import './localization.js'
import './maps/page.map.js'
import './scope.js'
import './logger.js'
import '@cypress/xpath';
import 'cypress-real-events';
require('@shelex/cypress-allure-plugin');


Cypress.on("uncaught:exception", _ => {
  return false;
});

afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

