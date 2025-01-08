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

     beforeEach(async () => {
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

    it('Redirect ke halaman Dashboard', async () => {
        let actualURL = await locatorPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard')
    });

    it('Redirect ke halaman Detil Proyek', async () => {
        await locatorPage.projekTerkini();

         let actualURL = await locatorPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/projects/hris-x-cbn-internship-portal-5')
    });

    it('Tambah Tugas', async () => {
        await locatorPage.projekTerkini()
        await locatorPage.addTugas()
        await locatorPage.tambahDataTugas(1, 'Task 99', 'testing input catatan tugas', 2);
        await locatorPage.buttonSubmit();
        await locatorPage.sleep();

        let actualText = await ass.assdataTugasNo3();
        expect(actualText).to.equal('Task 99\nNormal')
        await locatorPage.sleep();
    });

    it('Perbarui Tugas', async () => {
        await locatorPage.projekTerkini();
        await locatorPage.clickTask99();
        await locatorPage.editJudul('Task 99 edit');
        await locatorPage.sleep();
        await locatorPage.buttonSubmit();

        let actualText = await ass.assdataTugasNo3();
        expect(actualText).to.equal('Task 99 edit\nNormal')
        await locatorPage.sleep();
    });

    it('Hapus Tugas', async () => {
        await locatorPage.projekTerkini();
        await locatorPage.hapusTugasno3();
        await locatorPage.sleep();
    });


    afterEach(async () => {
        await locatorPage.closeBrowser();
    }); 
    
});