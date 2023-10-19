const Page = require('./Page.js');
import {Locator} from '../objects/locator.js';
import { LOCATOR_TYPES } from '../constants.js';


class SaucedemoCheckout extends Page {

    get path () { return `https://www.saucedemo.com/checkout-step-one.html` };
    get regexp () { return new RegExp('checkout'); };

    //page selectors
    selectors = {
        'checkout page title': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="title"]'),
        'checkout cancel button': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="cancel"]'),
        'checkout first name input field': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="first-name"]'),
        'checkout last name input field': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="last-name"]'),
        'checkout postal code input field': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="postal-code"]'),
        'checkout continue button': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="continue"]'),

        'checkout payment info': new Locator(LOCATOR_TYPES.CONTAIN, 'Payment Information'),
        'checkout shipping info': new Locator(LOCATOR_TYPES.CONTAIN, 'Shipping Information'),
        'checkout total price info': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="summary_info_label summary_total_label"]'),
        'checkout finish button': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="finish"]'),

        'checkout back home button': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="back-to-products"]'),
        'checkout header info': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="complete-header"]')
    }
}

module.exports = new SaucedemoCheckout();