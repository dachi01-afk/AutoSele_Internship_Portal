const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;

// test feature intern
describe('test feature intern', function() {
    let driver;
    let internPage;

    before(async () => {
        driver = await getDriver();
        internPage = new InternPage(driver)
        await driver.manage().window().maximize()
        await driver.get(`${config.baseURL}login`);
        // await internPage.Login(config.credentials.emailIntern, config.credentials.Password)
        await internPage.inputEmail(config.credentials.emailIntern);
        await internPage.inputPassword(config.credentials.Password);
        await internPage.buttonSubmit();
    });

        
    // Test Navbar
    describe('Test Navbar', function () {
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
            await internPage.buttonToProfil()

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
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/job-application-histories')
        })

        it('Berhasil logout dan kembali ke halaman utama beranda', async () => {
            await internPage.buttonProfil();
            await internPage.buttonKeluar();

            let actualText = await internPage.assText();
            expect(actualText).to.equal('Beranda')
        })
    })


    describe('Test Job Application History', function () {
        // beforeEach(async () => {
        //     await driver.get(`${config.baseURL}job-application-histories`)
        // })

        it('Berhasil melihat data riwayat lamaran (jika ada)', async () => {
            await internPage.buttonRiwayatHlmn();

            let resultURL = 'https://dev1.cyberprimatama.id/job-application-histories'
            let actualURL = await internPage.findCurrentURL();
            expect(actualURL).to.equal(resultURL);
        });

        it('Berhasil melihat data riwayat lamaran (jika ada)', async () => {
            await internPage.buttonRiwayatHlmn();
            await internPage.buttonDashboard();

            let actualURl = await internPage.findCurrentURL();
            expect(actualURl).to.equal('https://dev1.cyberprimatama.id/student/dashboard');
        });
    });

    describe('Test Profil', function() {
        it('Data profil berhasil diperbarui', async() => {
            await internPage.buttonEditProfil();
            await internPage.editNamaLengkap('Muhammad Rasyid Arifin edit');

            let actualText = await internPage.assEditName();
            expect(actualText).to.equal('Muhammad Rasyid Arifin edit')
        })

        it('Gagal memperbarui profil dan muncul pesan error', async () => {
            await internPage.buttonEditProfil();
            await internPage.editNoTelp('+62812345678904738428');
            
            let actualText = await internPage.asserrNumb();
            expect(actualText).to.equal('Nomor telepon maksimal berisi 15 karakter.')
        })
    })

    after(async () => {
        await internPage.closeBrowser();
    })
});
    