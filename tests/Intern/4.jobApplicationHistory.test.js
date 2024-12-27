const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Test Job Application History', function() {
    let driver;
    let internPage;

    before(async () => {
        driver = await getDriver();
        internPage = new InternPage(driver)
        await driver.manage().window().maximize();
        await driver.get(`${config.baseURL}login`);
        await internPage.inputEmail(config.credentials.emailIntern);
        await internPage.inputPassword(config.credentials.Password);
        await internPage.buttonSubmit();
    });

        it('Berhasil melihat data riwayat lamaran (jika ada)', async () => {
            await internPage.buttonProfil();
            await internPage.buttonRiwayatLamaran();

            let resultURL = 'https://dev1.cyberprimatama.id/job-application-histories'
            let actualURL = await internPage.findCurrentURL();
            expect(actualURL).to.equal(resultURL);
        });

        it('Redirect ke halaman Dashboard', async () => {
            await internPage.buttonDashboard();

            let actualURl = await internPage.findCurrentURL();
            expect(actualURl).to.equal('https://dev1.cyberprimatama.id/student/dashboard');
        });

    after(async () => {
        await internPage.closeBrowser();
    }); 
    

});