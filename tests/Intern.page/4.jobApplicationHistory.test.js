const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const LocatorPage = require("../../pages/LocatorPage");
const Ass = require("../../utils/Assertion");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Test Job Application History', function() {
    let driver;
    let locatorPage;
    let ass;

    before(async () => {
        driver = await getDriver();
        locatorPage = new LocatorPage(driver)
        ass = new Ass(driver)
        await driver.manage().window().maximize();
        await driver.get(`${config.baseURL}login`);
        await locatorPage.inputEmail(config.credentials.emailIntern);
        await locatorPage.inputPassword(config.credentials.Password);
        await locatorPage.buttonSubmit();
        await locatorPage.sleep();
    });

        it('Berhasil melihat data riwayat lamaran (jika ada)', async () => {
            await locatorPage.buttonProfil();
            await locatorPage.buttonRiwayatLamaran();

            let resultURL = 'https://dev1.cyberprimatama.id/job-application-histories'
            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal(resultURL);
        });

        it('Redirect ke halaman Dashboard', async () => {
            await locatorPage.buttonDashboard();

            let actualURl = await locatorPage.findCurrentURL();
            expect(actualURl).to.equal('https://dev1.cyberprimatama.id/student/dashboard');
        });

    after(async () => {
        await locatorPage.closeBrowser();
    }); 
    

});