const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const LocatorPage = require("../../pages/LocatorPage");
const Ass = require("../../utils/Assertion");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;

describe("Test Intern Page", function () {
    let driver;
    let locatorPage;
    let ass;

    // Login
        beforeEach(async () => {
            driver = await getDriver();
            locatorPage = new LocatorPage(driver)
            ass = new Ass(driver)
            await driver.manage().window().maximize();
            await driver.get(`${config.baseURL}login`);
        });

    it("Redirect ke halaman Lupa Kata Sandi", async () => {
        await locatorPage.buttonLupaPW();

        let actualURL = await locatorPage.findCurrentURL();
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/forgot-password')
    })

    it("Berhasil mendapatkan email pengaturan ulang kata sandi", async () => {
        await locatorPage.buttonLupaPW();
        await locatorPage.inputEmail('User02@gmail.com');
        await locatorPage.buttonSubmit();

        let actualText= await ass.confirPW();
        expect(actualText).to.equal(actualText)
    })

    it ('login skenario 1 -> Login Sukses', async() => {
        await locatorPage.inputEmail(config.credentials.emailIntern);
        await locatorPage.inputPassword(config.credentials.Password);
        await locatorPage.buttonSubmit();

        let actualText = await ass.assText();
        expect(actualText).to.equal('Beranda');
    });

    it ('login skenario 2 -> Login Gagal', async() => {
        await locatorPage.inputEmail(config.credentials.FKemail);
        await locatorPage.inputPassword(config.credentials.Fkpassword);
        await locatorPage.buttonSubmit();

        let actualURL = await locatorPage.findCurrentURL();
        expect(actualURL).to.equal(`${config.baseURL}login`);
    });
    
    afterEach(async () => {
    await locatorPage.closeBrowser();
    });
});