const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Feature NavBar', function() {
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


        it('Berhasil melihat daftar notifikasi', async () => {
            await internPage.buttonNotif();

            let actualText = await internPage.assNotif();
            expect(actualText).to.equal('Notifikasi');
        })

        it('Redirect ke halaman Riwayat Lamaran', async () => {
            await internPage.buttonProfil();
            await internPage.buttonRiwayatLamaran();

            let actualURL = await internPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/job-application-histories')
        })

        it('Redirect ke halaman Profil', async () => {
            await internPage.buttonProfil();
            await internPage.buttonToProfil();

            let actualURL =  await internPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/profile');
        })

        it('Redirect ke halaman Beranda', async () => {
            await internPage.buttonProfil();
            await internPage.buttonToBeranda();

            let actualURL = await internPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/');
        })

        it('Tandai Notifikasi Sebagai Terbaca', async () => {
            await internPage.buttonNotif();
            await internPage.buttonNotif02();
            await internPage.sleep();

            let actualURL = await internPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/logbooks')
        })

        it('Redirect ke halaman Dashboard', async () => {
            await internPage.buttonProfil();
            await internPage.buttonNavDashboard();

            let actualURL = await internPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard')
        })

        it('Berhasil logout dan kembali ke halaman utama beranda', async () => {
            await internPage.buttonProfil();
            await internPage.buttonKeluar();
            await internPage.sleep();

            let actualText = await internPage.assText();
            expect(actualText).to.equal('Beranda')
        })

    after(async () => {
        await internPage.closeBrowser();
    }); 
    
});
    