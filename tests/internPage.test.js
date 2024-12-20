const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../pages/InternPage");
const {getDriver}= require('../driver/webdriver');
const config = require('../config/config');
const chai = require('chai');
const expect = chai.expect;

describe("Test Intern Page", function () {
    let driver;
    let internPage;

    describe("Test Login", function () {

        beforeEach(async () => {
            driver = await getDriver();
            internPage = new InternPage(driver)
            await driver.manage().window().maximize();
            await driver.get(`${config.baseURL}login`);
        });

        it ('login skenario 2 -> Login Sukses', async() => {
        await internPage.inputEmail(config.credentials.emailIntern);
        await internPage.inputPassword(config.credentials.Password);
        await internPage.buttonSignIn();
        
        let actualText = await internPage.getSuccessMessageText();
        expect(actualText).to.equal('Beranda');
        });

    });
    

    afterEach(async () => {
        await internPage.closeBrowser();
    });
});