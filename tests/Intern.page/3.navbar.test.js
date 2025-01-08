const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const LocatorPage = require("../../pages/LocatorPage");
const Ass = require("../../utils/Assertion");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Feature NavBar', function() {
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
    });


        it('Berhasil melihat daftar notifikasi', async () => {
            await locatorPage.buttonNotif();

            let actualText = await ass.assNotif();
            expect(actualText).to.equal('Notifikasi');
        })

        it('Redirect ke halaman Riwayat Lamaran', async () => {
            await locatorPage.buttonProfil();
            await locatorPage.buttonRiwayatLamaran();

            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/job-application-histories')
        })

        it('Redirect ke halaman Profil', async () => {
            await locatorPage.buttonProfil();
            await locatorPage.buttonToProfil();

            let actualURL =  await locatorPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/profile');
        })

        it('Redirect ke halaman Beranda', async () => {
            await locatorPage.buttonProfil();
            await locatorPage.buttonToBeranda();

            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/');
        })

        it('Tandai Notifikasi Sebagai Terbaca', async () => {
            await locatorPage.buttonNotif();
            await locatorPage.buttonNotif02();
            await locatorPage.sleep();

            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/logbooks')
        })

        it('Redirect ke halaman Dashboard', async () => {
            await locatorPage.buttonProfil();
            await locatorPage.buttonNavDashboard();

            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard')
        })

        it('Berhasil logout dan kembali ke halaman utama beranda', async () => {
            await locatorPage.buttonProfil();
            await locatorPage.buttonKeluar();
            await locatorPage.sleep();

            let actualText = await ass.assText();
            expect(actualText).to.equal('Beranda')
        })

    after(async () => {
        await locatorPage.closeBrowser();
    }); 
    
});
    