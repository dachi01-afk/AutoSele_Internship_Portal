const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;

describe("Test Intern Page", function () {
    let driver;
    let internPage;

    // Login
    describe("Test Login", function () {
        beforeEach(async () => {
            driver = await getDriver();
            internPage = new InternPage(driver)
            await driver.manage().window().maximize();
            await driver.get(`${config.baseURL}login`);
        });

    it("Redirect ke halaman Lupa Kata Sandi", async () => {
        await internPage.buttonLupaPW();

        let actualURL = await internPage.findCurrentURL();
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/forgot-password')
    })

    it("Berhasil mendapatkan email pengaturan ulang kata sandi", async () => {
        await internPage.buttonLupaPW();
        await internPage.inputEmail('User02@gmail.com');
        await internPage.buttonSubmit();

        let actualText= await internPage.confirPW();
        expect(actualText).to.equal(actualText)
    })

    it ('login skenario 1 -> Login Sukses', async() => {
        await internPage.inputEmail(config.credentials.emailIntern);
        await internPage.inputPassword(config.credentials.Password);
        await internPage.buttonSubmit();

        let actualText = await internPage.assText();
        expect(actualText).to.equal('Beranda');
    });

    it ('login skenario 2 -> Login Gagal', async() => {
        await internPage.inputEmail(config.credentials.FKemail);
        await internPage.inputPassword(config.credentials.Fkpassword);
        await internPage.buttonSubmit();

        let actualURL = await internPage.findCurrentURL();
        expect(actualURL).to.equal(`${config.baseURL}login`);
    });
        
    });
    
    afterEach(async () => {
    await internPage.closeBrowser();
    });
});