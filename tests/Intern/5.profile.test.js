const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../../pages/InternPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Test Profil', function() {
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
        await internPage.buttonToProfil();
        
    }); 

        it('Data profil berhasil diperbarui', async() => {
            await internPage.buttonEditProfil();
            await internPage.editNamaLengkap('Muhammad Rasyid Arifin edit');
            await internPage.buttonSubmit();
            await internPage.sleep();

            let actualText = await internPage.assEditName();
            expect(actualText).to.equal('Muhammad Rasyid Arifin edit')
        })

        it('Gagal memperbarui profil dan muncul pesan error', async () => {
            await internPage.buttonEditProfil();
            await internPage.editNoTelp('+62812345678904738428');
            await internPage.buttonSubmit()
            await internPage.sleep();
            
            let actualText = await internPage.asserrNumb();
            expect(actualText).to.equal('Nomor telepon maksimal berisi 15 karakter.')
        })

    after(async () => {
        await internPage.closeBrowser();
    }); 
    
});