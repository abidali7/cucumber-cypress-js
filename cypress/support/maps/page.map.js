/**
 *
 * this class is forwarding the correct page object model or representive variables of it
 * based on the page description provided over the gherkin bdd definition
 * @author Marco Bierbach
 */

import {WILD_CARDS} from '../constants.js';
import WildCard from '../objects/wildcard.js';

const GooglePage = require("../pages/google.page");
const SaucedemoLogin = require("../pages/saucedemo.login.page");
const SaucedemoInventory  = require("../pages/saucedemo.inventory.page");
const SaucedemoDetailsView  = require("../pages/saucedemo.details.page");
const SaucedemoCartView  = require("../pages/saucedemo.cart.page");
const SaucedemoCheckout  = require("../pages/saucedemo.checkout.page");

cy.pageMap = {};

const PAGEMAP = {
    'google page': GooglePage,
    'saucedemo login page': SaucedemoLogin,
    'saucedemo inventory page': SaucedemoInventory,
    'saucedemo details page': SaucedemoDetailsView,
    'saucedemo cart page': SaucedemoCartView,
    'saucedemo checkout page': SaucedemoCheckout
}

cy.pageMap.getPageUrl = (pageDescription) => {
    if(PAGEMAP[pageDescription] === undefined)
        cy.logger.log("Error",`no url mapping found for page description [${pageDescription}]`);

    return cy.helper.replaceWildCard(
                PAGEMAP[pageDescription].path,
                new WildCard(
                    WILD_CARDS.LANG_CODE,
                    cy.localization.getLangCode()
                )
            );
}

cy.pageMap.getPageRegExp = (pageDescription) => {
    if(PAGEMAP[pageDescription] === undefined)
        cy.logger.log("Error", `no url mapping found for page description [${pageDescription}]`);
    return PAGEMAP[pageDescription].regexp;
}

cy.pageMap.getPage = (pageDescription) => {
    if(PAGEMAP[pageDescription] == null)
        cy.logger.log("Error",`no page mapping found for page description [${pageDescription}]`);
    return PAGEMAP[pageDescription];
}