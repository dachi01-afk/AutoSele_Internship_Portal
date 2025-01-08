const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const UnvSupPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;

describe("Test Login & Logout", function () {
    let driver;
    let unvSupPage;

    before(async () => {
        driver = await getDriver();
        unvSupPage = new UnvSupPage(driver)
        await driver.manage().window().maximize();
        await driver.get(`${config.baseURL}login`);
        await unvSupPage.Login(config.browser.emailUnvSupervisor, config.credentials.Password)
    });

    it('Login', async () => {
        let actualURL = await internPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/');
    })

    it('Logout', async () => {
        
    })


    after(async () => {
        await internPage.closeBrowser();
    });
    
});