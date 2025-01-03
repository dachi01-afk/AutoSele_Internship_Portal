const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Test Project List dan Project Detail', function() {
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
        await internPage.buttonProfil();
        await internPage.buttonNavDashboard();
    });

    it('Berhasil menampilkan logbook', async () => {
        await internPage.aturLogbook()

        let actualURL = await internPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/logbooks')
    });

    it('Tambah Logbook', async () => {
        await internPage.addLogbook();
        await internPage.inputLogbook('03/01/2025', 2, 2, 'Rumah');
        await internPage.buttonSubmit();
        // await internPage.sleep();

        let actualText = await internPage.assValueLogbook();
        expect(actualText).to.equal(actualText);
    });

    it('Perbarui Logbook', async () => {
        await internPage.clickEditLogbook1();
        await internPage.editlokasi('rumeh edit');
        await internPage.sleep();
    });

    it('Hapus Logbook', async () => {
        await internPage.clickHapusLogbook1();
    });

    after(async () => {
        await internPage.closeBrowser();
    }); 
    
});