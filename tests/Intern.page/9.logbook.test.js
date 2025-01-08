const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const LocatorPage = require("../../pages/LocatorPage");
const Ass = require("../../utils/Assertion");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Test Project List dan Project Detail', function() {
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
        await locatorPage.buttonProfil();
        await locatorPage.buttonNavDashboard();
    });

    it('Berhasil menampilkan logbook', async () => {
        await locatorPage.aturLogbook()

        let actualURL = await locatorPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/logbooks')
    });

    it('Tambah Logbook', async () => {
        await locatorPage.addLogbook();
        await locatorPage.inputLogbook('03/01/2025', 2, 2, 'Rumah');
        await locatorPage.buttonSubmit();
        // await locatorPage.sleep();

        let actualText = await ass.assValueLogbook();
        expect(actualText).to.equal(actualText);
    });

    it('Perbarui Logbook', async () => {
        await locatorPage.clickEditLogbook1();
        await locatorPage.editlokasi('rumeh edit');
        await locatorPage.sleep();
    });

    it('Hapus Logbook', async () => {
        await locatorPage.clickHapusLogbook1();
    });

    after(async () => {
        await locatorPage.closeBrowser();
    }); 
    
});