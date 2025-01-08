const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const LocatorPage = require("../../pages/LocatorPage");
const Ass = require("../../utils/Assertion");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;


describe('Test Profil', function() {
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
        await locatorPage.buttonToProfil();
        
    }); 

        it('Data profil berhasil diperbarui', async() => {
            await locatorPage.buttonEditProfil();
            await locatorPage.editNamaLengkap('Muhammad Rasyid Arifin edit');
            await locatorPage.buttonSubmit();
            await locatorPage.sleep();

            let actualText = await ass.assEditName();
            await locatorPage.sleep();
            expect(actualText).to.equal('Muhammad Rasyid Arifin edit')
        })

        it('Gagal memperbarui profil dan muncul pesan error', async () => {
            await locatorPage.buttonEditProfil();
            await locatorPage.editNoTelp('+62812345678904738428');
            await locatorPage.buttonSubmit()
            await locatorPage.sleep();
            
            let actualText = await ass.asserrNumb();
            await locatorPage.sleep
            expect(actualText).to.equal('Nomor telepon maksimal berisi 15 karakter.')
        })

    after(async () => {
        await locatorPage.closeBrowser();
    }); 
    
});