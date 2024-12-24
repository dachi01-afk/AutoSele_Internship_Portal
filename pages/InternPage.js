const BasePage = require('./BasePage');
const {By} = require('selenium-webdriver');

class InternPage extends BasePage {

    constructor(driver) {
        super(driver);

        // Locator Login
        this.Email          = By.name('email');
        this.Password       = By.name('password');
        this.Submit         = By.xpath('//button[@type="submit"]');
        // locator Register
        this.namaLengkap    = By.name('full_name');
        this.jenisKelaminL  = By.id('gender-male');
        this.jenisKelaminP  = By.id('gender-female');
        this.noTelp         = By.name('phone_number');
        this.universitas    = By.name('university_slug');

        // locator forgot password
        this.lupaPW         = By.xpath('/html/body/div/div/div[1]/form/a');

        // Locator assertion text
        this.locatorBeranda = By.xpath('/html/body/nav/div/div[1]/div[1]/a[1]/span'); // -> Beranda
        this.locatorRegist1 = By.xpath('/html/body/div/div/div/div/h1');  // -> Berhasil Mendaftar
        this.locatorRegist0 = By.xpath('/html/body/div/div/div[2]/form/small') // -> Email sudah ada sebelumnya.
        this.locatorConfirPW= By.xpath('/html/body/div/div') 
    }


    // Login
    async inputEmail(email) {
        await this.findElementInput(this.Email, email);
    }

    async inputPassword(password) {
        await this.findElementInput(this.Password, password);
    }

    async buttonSubmit () {
        await this.clickElement(this.Submit);
    }

    // Register
    async inputNamaLengkap(fullName) {
        await this.findElementInput(this.namaLengkap, fullName)
    }

    async inputJenisKelamin(select) {
        if(select == 1){
            await this.clickElement(this.jenisKelaminL)
        }else if(select == 2) {
            await this.clickElement(this.jenisKelaminP)
        }
    }

    async inputNoTelp(number) {
        await this.findElementInput(this.noTelp, number)
    }

    async inputUniversitas(univ) {
        await this.clickElement(this.universitas);
        await this.findElementInput(this.universitas, univ)
        await this.clickElement(By.xpath('/html/body/div/div/div[2]/form/div[4]/div/ul/li'));

    }

    async Register(Fullname, Gender, Num, Univ, Email, Pass) {
        await this.inputNamaLengkap(Fullname)
        await this.inputJenisKelamin(Gender)
        await this.inputNoTelp(Num)
        await this.inputUniversitas(Univ)
        await this.inputEmail(Email)
        await this.inputPassword(Pass)
    }

    // Forgot passord
    async buttonLupaPW() {
        await this.clickElement(this.lupaPW);
    }


    // assertion by text
    async assText() {
       return await this.findText(this.locatorBeranda);
    }

    async assRS1() {
       return await this.findText(this.locatorRegist1);
    }

    async assRS0() {
       return await this.findText(this.locatorRegist0);
    }

    async confirPW() {
        return await this.findText(this.locatorConfirPW)
    }

}

module.exports = InternPage;