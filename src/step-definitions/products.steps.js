const { Given, When, Then } = require('@wdio/cucumber-framework');
const config = require('../config');
const loginPage = require('../page-objects/login.page');

const productsPage = require('../page-objects/products.page');


const dateUtil = require('../utils/dateUtil')
const driverUtil = require('../utils/driverUtil');
const chai = require('chai');  
const expect = chai.expect; 

Given('I navigate to app', async () => {
    await browser.url(`http://www.saucedemo.com`);
})

Then('I validate login page displayed', async () => {
    expect(await loginPage.isLoginPageDisplayed()).to.be.true
})

When('I login with username {string} and password {string}', async (username,password) => {
    await loginPage.login(username, password )
})

Then('I see products page', async () => {
    expect(await productsPage.isPageDisplayed()).to.be.true
})

When('I add highest priced product to cart', async () => {
    await productsPage.addHightestpricesItem();
})

Then('I see highest priced product button label is {string}', async (label) => {
    expect(await productsPage.getHighestpricesItemBtnText()).to.include(label)
})
