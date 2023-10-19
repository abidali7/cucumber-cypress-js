const Page = require('./Page.js');
import {Locator} from '../objects/locator.js';
import { LOCATOR_TYPES } from '../constants.js';


class SaucedemoInventory extends Page {

    get path () { return `https://www.saucedemo.com/inventory.html` };
    get regexp () { return new RegExp('inventory'); };

    //page selectors
    selectors = {
        'inventory sort container': new Locator(LOCATOR_TYPES.XPATH, '//*[@data-test="product_sort_container"]'),
        'inventory sort active option': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="active_option"]'),
        'inventory item name': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="inventory_item_name "]'),
        'inventory items': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="inventory_item"]'),
        'inventory item price': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="inventory_item_price"]')
    }
}

module.exports = new SaucedemoInventory();