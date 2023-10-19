import './helper.js'
import './localization.js'
import './maps/page.map.js'
import './scope.js'
import './logger.js'
import '@cypress/xpath';
import 'cypress-real-events';
import '@shelex/cypress-allure-plugin';
import './commands.js'


Cypress.on("uncaught:exception", _ => {
  return false;
});

afterEach(() => {
  //cy.LoginWithPageSession();
});

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

