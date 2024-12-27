const BasePage = require('./BasePage');
const {By, Key} = require('selenium-webdriver');

class InternPage extends BasePage {

    constructor(driver) {
        super(driver);
    }

    // Login
    async inputEmail(email) {
        await this.findElementInput(By.name('email'), email);
    }

    async inputPassword(password) {
        await this.findElementInput(By.name('password'), password);
    }

    async buttonSubmit () {
        await this.clickElement(By.xpath('//button[@type  ="submit"]'));
    }

    async Login(email, password) {
        await this.findElementInput(By.name('email'), email)
        await this.findElementInput(By.name('password'), password)
        await this.buttonSubmit();
    }

    // Register
    async inputNamaLengkap(fullName) {
        await this.findElementInput(By.name('full_name'), fullName)
    }

    async inputJenisKelamin(select) {
        if(select == 1){
            await this.clickElement(By.id('gender-male'))
        }else if(select == 2) {
            await this.clickElement(By.id('gender-female'))
        }
    }

    async inputNoTelp(number) {
        await this.findElementInput(By.name('phone_number'), number)
    }

    async inputUniversitas(univ) {
        await this.clickElement(By.name('university_slug'));
        await this.findElementInput(By.name('university_slug'), univ)
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
        await this.clickElement(By.xpath('/html/body/div/div/div[1]/form/a'));
    }

    // Navbar // Job Application History
    async buttonProfil() {
        await this.clickElement(By.xpath('//button[@id="button-dropdown-profile"]'));
    }

    async buttonKeluar() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[5]/button'));
    }

    async buttonNavDashboard() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[4]/a'))
    }

    async buttonNotif() {
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/div[1]/button'));
    }

    async buttonRiwayatLamaran() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[3]/a'));
    }

    async buttonToProfil() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[1]/a'));
    }

    async buttonToBeranda() {
        await this.clickElement(By.xpath('//*[@id="dropdown-profile"]/ul/li[2]/a'));
    }

    async buttonNotif02() {
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/div[1]/div/div[2]/div/div[2]/div/div/h5'));
    }

    async buttonAllNotif() {    
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/div[1]/div/div[1]/p'));
    }

    async buttonDashboard() {
        await this.clickElement(By.xpath('/html/body/div/div/div/div[2]/div/table/tbody/tr/td[5]/div/a'));
    }

    // Profil
    async buttonEditProfil() {
        await this.clickElement(By.xpath('/html/body/div/div[1]/div/div[2]/div/div[1]/div[1]/button'))
    }

    async editNamaLengkap(fullName) {
        await this.editElementInput(By.name('full_name'), fullName)
    }

    async editNoTelp(number) {
        await this.editElementInput(By.name('phone_number'), number)
    }


    // assertion by text
    async assText() {
        // -> Beranda
       return await this.findText(By.xpath('/html/body/nav/div/div[1]/div[1]/a[1]/span'));
    }

    async assRS1() {
        // -> Berhasil Mendaftar
       return await this.findText(By.xpath('/html/body/div/div/div/div/h1'));
    }

    async assRS0() {
        // -> Email sudah ada sebelumnya.
       return await this.findText(By.xpath('/html/body/div/div/div[2]/form/small'));
    }

    async confirPW() {
        return await this.findText(By.xpath('/html/body/div/div'))
    }

    async assNotif() {
        // -> Notifikasi
        return await this.findText(By.xpath('/html/body/nav/div/div[2]/div/div[1]/div/div[1]/h4'));
    }

    async assEditName() {
        // -> Muhammad Rasyid Arifin edit
        return await this.findText(By.xpath('/html/body/div/div[1]/div/div[2]/div/div[1]/div[1]/p'));
    }

    async asserrNumb() {
        // ->Nomor telepon maksimal berisi 15 karakter.
        return await this.findText(By.xpath('//*[@id="form-add-modal"]/div/form/div[1]/div[2]/small'));
    }

}

module.exports = InternPage;