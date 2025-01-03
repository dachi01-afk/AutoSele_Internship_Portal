const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Test Dashboard', function() {
    let driver;
    let internPage;

     beforeEach(async () => {
        driver = await getDriver();
        internPage = new InternPage(driver)
        await driver.manage().window().maximize();
        await driver.get(`${config.baseURL}login`);
        await internPage.inputEmail(config.credentials.emailIntern);
        await internPage.inputPassword(config.credentials.Password);
        await internPage.buttonSubmit();
        await internPage.buttonProfil();
        await internPage.buttonNavDashboard()
        
    });
    
    it('Lihat Proyek Terkini', async () => {
        let actualText = await internPage.assdataProjekTerkini();
        expect(actualText).to.equal(actualText)
    });
    
    it('Lihat Daftar Tugas', async () => {
        let actualText = await internPage.assdataTugas();
        expect(actualText).to.equal(actualText)
    });

    it('Lihat Logbook Hari Ini', async () => {
        let actualText = await internPage.assdataLogbook();
        expect(actualText).to.equal(actualText)
     });

    it('Lihat Mentor Proyek Terkini', async () => {
        let actualText = await internPage.assdataMentor();
        expect(actualText).to.equal(actualText)
    });

    it('Redirect ke halaman Proyek', async () => {
        await internPage.lihatSemuaProyek();

        let actualURL = await internPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/projects')
    });

    it('Redirect ke halaman Logbook -> Atur Logbook', async () => {
        await internPage.aturLogbook();

        let actualURL = await internPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/logbooks')
    });

    it('Redirect ke halaman Logbook -> + Tambah Logbook', async () => {
        await internPage.tambahLogbook();

        let actualURL = await internPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/logbooks')
    });

    it('Redirect ke halaman Detil Proyek', async () => {
        await internPage.projekTerkini();

        let actualURL = await internPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/projects/hris-x-cbn-internship-portal-5')
    });

    it('Tambah Tugas', async () => { 
        await internPage.projekTerkini()
        await internPage.addTugas()
        await internPage.tambahDataTugas(1, 'Task 88', 'testing input catatan tugas', 2);
        await internPage.buttonSubmit();
        await internPage.sleep();

        let actualText = await internPage.assdataTugasNo3();
        expect(actualText).to.equal('Task 88\nNormal')
        await internPage.sleep();
        await internPage.hapusTugasno3();
        await internPage.sleep();

    });

    afterEach(async () => {
        await internPage.closeBrowser();
    }); 
    
});