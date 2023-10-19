const Page = require('./Page.js');
import {Locator} from '../objects/locator.js';
import { LOCATOR_TYPES } from '../constants.js';


class SaucedemoCartView extends Page {

    get path () { return `https://www.saucedemo.com/cart.html` };
    get regexp () { return new RegExp('cart.html'); };

    //page selectors
    selectors = {
        'cart quantity': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="cart_quantity"]'),
        'cart continue shopping': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="continue-shopping"]'),
        'cart remove from button': new Locator(LOCATOR_TYPES.CONTAIN, 'Remove'),
        'cart checkout button': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="checkout"]')
    }
}

module.exports = new SaucedemoCartView();