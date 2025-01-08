const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const LocatorPage = require("../../pages/LocatorPage");
const Ass = require("../../utils/Assertion");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;

    // Register
describe("Test Register", function () {
    let driver;
    let locatorPage;
    let ass;

    beforeEach(async () => {
        driver = await getDriver();
        locatorPage = new LocatorPage(driver)
        ass = new Ass(driver)
        await driver.manage().window().maximize();
        await driver.get(`${config.baseURL}register`);
    })

    it("Register skenarion 1 -> Register Succes", async () => {
        await  locatorPage.Register('User test 08', 1, '082234566543', 'Aqua Cybro', 'User08', '1234567890');
        await locatorPage.buttonSubmit()

        let actualText = await ass.assRS1();
        expect(actualText).to.equal('Berhasil Mendaftar');
    })

    it("Register skenarion 2 -> Register Failed", async () => {
        await  locatorPage.Register('User test 02', 2, '082234566543', 'Aqua Cybro', 'User02', '1234567890');
        await locatorPage.buttonSubmit()

        let actualText = await ass.assRS0();
        expect(actualText).to.equal('Email sudah ada sebelumnya.');
    })

    afterEach(async () => {
    await locatorPage.closeBrowser();
    });
})