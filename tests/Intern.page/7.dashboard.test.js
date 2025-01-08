const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const LocatorPage = require("../../pages/LocatorPage");
const Ass = require("../../utils/Assertion");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Test Dashboard', function() {
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
        await locatorPage.buttonNavDashboard()
        
    });
    
    it('Lihat Proyek Terkini', async () => {
        let actualText = await ass.assdataProjekTerkini();
        expect(actualText).to.equal(actualText)
    });
    
    it('Lihat Daftar Tugas', async () => {
        let actualText = await ass.assdataTugas();
        expect(actualText).to.equal(actualText)
    });

    it('Lihat Logbook Hari Ini', async () => {
        let actualText = await ass.assdataLogbook();
        expect(actualText).to.equal(actualText)
     });

    it('Lihat Mentor Proyek Terkini', async () => {
        let actualText = await ass.assdataMentor();
        expect(actualText).to.equal(actualText)
    });

    it('Redirect ke halaman Proyek', async () => {
        await locatorPage.lihatSemuaProyek();

        let actualURL = await locatorPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/projects')
    });

    it('Redirect ke halaman Logbook -> Atur Logbook', async () => {
        await locatorPage.aturLogbook();

        let actualURL = await locatorPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/logbooks')
    });

    it('Redirect ke halaman Logbook -> + Tambah Logbook', async () => {
        await locatorPage.tambahLogbook();

        let actualURL = await locatorPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/logbooks')
    });

    it('Redirect ke halaman Detil Proyek', async () => {
        await locatorPage.projekTerkini();

        let actualURL = await locatorPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/projects/hris-x-cbn-internship-portal-5')
    });

    it('Tambah Tugas', async () => { 
        await locatorPage.projekTerkini()
        await locatorPage.addTugas()
        await locatorPage.tambahDataTugas(1, 'Task 88', 'testing input catatan tugas', 2);
        await locatorPage.buttonSubmit();
        await locatorPage.sleep();

        let actualText = await ass.assdataTugasNo3();
        expect(actualText).to.equal('Task 88\nNormal')
        await locatorPage.sleep();
        await locatorPage.hapusTugasno3();
        await locatorPage.sleep();

    });

    afterEach(async () => {
        await locatorPage.closeBrowser();
    }); 
    
});