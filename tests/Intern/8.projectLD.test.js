const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Test Project List dan Project Detail', function() {
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
        await internPage.buttonNavDashboard();
    });

    it('Redirect ke halaman Dashboard', async () => {
        let actualURL = await internPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard')
    });

    it('Redirect ke halaman Detil Proyek', async () => {
        await internPage.projekTerkini();

         let actualURL = await internPage.findCurrentURL()
        expect(actualURL).to.equal('https://dev1.cyberprimatama.id/student/dashboard/projects/hris-x-cbn-internship-portal-5')
    });

    it('Tambah Tugas', async () => {
        await internPage.projekTerkini()
        await internPage.addTugas()
        await internPage.tambahDataTugas(1, 'Task 99', 'testing input catatan tugas', 2);
        await internPage.buttonSubmit();
        await internPage.sleep();

        let actualText = await internPage.assdataTugasNo3();
        expect(actualText).to.equal('Task 99\nNormal')
        await internPage.sleep();
    });

    it('Perbarui Tugas', async () => {
        await internPage.projekTerkini();
        await internPage.clickTask99();
        await internPage.editJudul('Task 99 edit');
        await internPage.sleep();
        await internPage.buttonSubmit();

        let actualText = await internPage.assdataTugasNo3();
        expect(actualText).to.equal('Task 99 edit\nNormal')
        await internPage.sleep();
    });

    it('Hapus Tugas', async () => {
        await internPage.projekTerkini();
        await internPage.hapusTugasno3();
        await internPage.sleep();
    });


    afterEach(async () => {
        await internPage.closeBrowser();
    }); 
    
});