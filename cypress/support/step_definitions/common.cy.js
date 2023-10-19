import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import WildCard from "../objects/wildcard";
import {WILD_CARDS} from "../constants";

When(/^I go to the "(.* page)"$/, function(pageDescription) {
    cy.helper.goto(pageDescription);
});

Then(/^The "(tab title)" is in "(.*)"$/, function (element, language) {
    const expectedValue = cy.localization.getLocalizationStringWithWildCards(cy.scope.currentPage, language, element, [new WildCard(WILD_CARDS.ELEMENT_TEXT, Cypress.env('envName'))]);
    cy.logger.log("Info", `tab title should be [${expectedValue}]`);
    cy.title().should('eq', expectedValue );
});

When(/^I click the "(.* button|.* input field|.* mask|.* link)"$/, function(selectorIdentifier) {
    cy.log("click selectorIdentifier: " + selectorIdentifier);
    cy.helper.clickElement(selectorIdentifier, false);
});

When(/^I click the "(.*)" by the "(.*)"$/, function(selectorIdentifier, text) {
    cy.helper.clickElement(selectorIdentifier, text);
});

When(/^I hover the element "(.*)"$/, function(selectorIdentifier) {
   cy.helper.hoverElement(selectorIdentifier);
});

When(/^I type "(.*)" into the "(.* input field|.* mask|.* dropdown)"( and hit enter)?$/, function (text, selectorIdentifier, hitEnter) {
    cy.helper.typeText(text,selectorIdentifier,hitEnter);
});

When(/^I am on the "(.* page)"$/, function (pageDescription) {
    const url = cy.pageMap.getPageUrl(pageDescription);
    cy.url().should('contain', url);
    cy.scope.currentPage = pageDescription;
    cy.scope.currentPageObject = cy.pageMap.getPage(pageDescription);
});

Given(/^The website language is "(.*)"$/, function (language) {
    cy.scope.websiteLanguage = language;
});

Then(/^I see(?: the| a) "(.*)"( by scrolling)?$/, function (pageElement, scrollTo) {
    console.log(`searching for element with identifier ${pageElement}`);
    if(scrollTo)
        cy.helper.getElement(pageElement).scrollIntoView().should('be.visible');
    else
        cy.helper.getElement(pageElement).should('be.visible');
});

Then(/^I no more see the "(.*)"$/, function (pageElement) {
    cy.helper.getElement(pageElement).should('not.exist');
});

Then(/^I see "(.*)"(?: activated| a| appeared) as "(.*)"$/, function (pageElement, text) {
    cy.helper.getElement(pageElement).should('have.text', text);
});

Then(/^I see "(.*)" are in "(.*)" order$/, function (pageElement, text) {
    cy.log(cy.helper.sortElements(pageElement, text));
});

Then(/^I see that the url matches the "(.*)" url$/, function(pageDescription) {
    cy.url().should('match', cy.pageMap.getPageRegExp(pageDescription));
    cy.scope.currentPage = pageDescription;
    cy.scope.currentPageObject = cy.pageMap.getPage(pageDescription);
});

When(/^I select "(.*)" from "(.* sort container|.* dropdown)"$/, function (text, pageElement) {
    cy.helper.selectElementByText(pageElement, text);
});