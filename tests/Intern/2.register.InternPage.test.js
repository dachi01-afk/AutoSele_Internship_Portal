const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;

    // Register
describe("Test Register", function () {
    let driver;
    let internPage;

    beforeEach(async () => {
        driver = await getDriver();
        internPage = new InternPage(driver)
        await driver.manage().window().maximize();
        await driver.get(`${config.baseURL}register`);
    })

    it("Register skenarion 1 -> Register Succes", async () => {
        await  internPage.Register('User test 06', 1, '082234566543', 'Aqua Cybro', 'User06', '1234567890');
        await internPage.buttonSubmit()

        let actualText = await internPage.assRS1();
        expect(actualText).to.equal('Berhasil Mendaftar');
    })

    it("Register skenarion 2 -> Register Failed", async () => {
        await  internPage.Register('User test 02', 2, '082234566543', 'Aqua Cybro', 'User02', '1234567890');
        await internPage.buttonSubmit()

        let actualText = await internPage.assRS0();
        expect(actualText).to.equal('Email sudah ada sebelumnya.');
    })

    afterEach(async () => {
    await internPage.closeBrowser();
    });
})