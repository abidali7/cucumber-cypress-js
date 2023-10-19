const Page = require('./Page.js');
import {Locator} from '../objects/locator.js';
import { LOCATOR_TYPES } from '../constants.js';


class SaucedemoDetailsView extends Page {

    get path () { return `https://www.saucedemo.com/inventory-item.html` };
    get regexp () { return new RegExp('inventory-item'); };

    //page selectors
    selectors = {
        'details view name': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="inventory_details_name large_size"]'),
        'details view price': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="inventory_details_price"]'),
        'details img': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="inventory_details_img"]'),
        'details add to cart button': new Locator(LOCATOR_TYPES.CONTAIN, 'Add to cart'),
        'details remove from cart button': new Locator(LOCATOR_TYPES.CONTAIN, 'Remove'),
        'details cart badge': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="shopping_cart_badge"]'),
        'details cart link': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="shopping_cart_link"]')
    }
}

module.exports = new SaucedemoDetailsView();