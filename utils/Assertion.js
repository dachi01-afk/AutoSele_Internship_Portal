
const BasePage = require('../pages/BasePage');
const { By} = require('selenium-webdriver');

// Asertion By Text
class Ass extends BasePage {

    constructor(driver) {
        super(driver);
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

    // ass dashboard
    async assdataProjekTerkini () {
        return await this.findText(By.xpath('/html/body/div/div[1]/div/div[1]/div[2]/a'));
    }

    async assdataTugas () {
        return await this.findText(By.xpath('/html/body/div/div[2]/div/div[1]/div'));
    }

    async assdataLogbook() {
        return await this.findText(By.xpath('/html/body/div/div[1]/div/div[2]/div[2]'))
    }

    async assdataMentor() {
        return await this.findText(By.xpath('/html/body/div/div[2]/div/div[2]/div'));
    }

    async assdataTugasNo3() {
        return await this.findText(By.xpath('/html/body/div[2]/div[1]/div/div/div/div[3]/div[1]/div/div/p[1]'));
    }

    async assValueLogbook() {
        return await this.findText(By.xpath('/html/body/div[2]/div[1]/div[2]/div[1]/table'))
    }

}

module.exports = Ass