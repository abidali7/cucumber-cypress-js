const Page = require('./Page.js');
import {Locator} from '../objects/locator.js';
import { LOCATOR_TYPES } from '../constants.js';


class SaucedemoLogin extends Page {

    get path () { return `https://www.saucedemo.com/` };

    //page selectors
    selectors = {
        'saucedemo login logo': new Locator(LOCATOR_TYPES.XPATH, '//*[@class="login_logo"]'),
        'userName input field': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="user-name"]'),
        'password input field': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="password"]'),
        'loginBtn button': new Locator(LOCATOR_TYPES.XPATH, '//*[@id="login-button"]')
    }
}

module.exports = new SaucedemoLogin();