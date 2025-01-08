const BasePage = require('../BasePage');
const { By} = require('selenium-webdriver');

class PublicPage extends BasePage {

    constructor(driver) {
        super(driver);
    }

    //Halaman Beranda
    async buttonBeranda () {
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[1]/span'));
    }

    async buttonBergabung(){
        await this.clickElement(By.xpath('/html/body/div[1]/div/a'));
    }

    async buttonMasuk(){
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/a[1]'));
    }

    async buttonDaftar(){
        await this.clickElement(By.xpath('/html/body/nav/div/div[2]/div/a[2]'));
    }

    async clickTopJobs1(){
        await this.clickElement(By.xpath('/html/body/div[2]/div/div/a[1]'));
    }

    async clickLamarSekarang() {
        await this.clickElement(By.xpath('/html/body/div/div/div/div[1]/div[1]/form/button'));
    }

    async buttonLLB() {
        await this.clickElement(By.xpath('/html/body/div[3]/a'))
    }

    
    // Halaman Telusuri Lowongan
    async buttonTL(){
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[2]/span'));
    }

    async filterLowonganByCompany() {
        // filter perusahaan -> PT Cyberindo Aditama (CBN)
        await this.clickElement(By.xpath('/html/body/div/div/div/div/div[2]/div[1]/div/div[3]/div[1]/div/div[2]/label'));
    }

    async filterLowonganByLocation() {
        // filter lokasi -> jakarta
        await this.clickElement(By.xpath('/html/body/div/div/div/div/div[2]/div[1]/div/div[3]/div[2]/div/div[2]/label'));
    }

    async clickJobTL1() {
        //pilih job pertama untuk cek detail
        await this.clickElement(By.xpath('/html/body/div/div/div/div/div[2]/div[2]/div/div[2]/a[1]'));
    }

    async buttonKembali () {
        await this.clickElement(By.xpath('/html/body/div/div/a'));
    }

    // Halaman Perusahaan
    async buttonPerusahaan() {
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[3]'));
    }


    // Halaman Universitas
    async buttonUniversitas () {
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[4]/span'));
    }

    async cekdetailUniv01() {
        await this.clickElement(By.xpath('/html/body/div/div/div[3]/div[1]/div/div/div/a'));
    }


    // Halaman Tentang CBN
    async tentangCBN () {
        await this.clickElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[5]/span'));
    }

    // Asertion By Text
    async assUnivByProv() {
        await this.findText(By.xpath('/html/body/div/div/div[3]/div[1]/p'));
    }

    // search 
    async inputSearch(testSearch) {
        await this.findElementInput(By.xpath('//input[@id="search"]'), testSearch);
    }
}

module.exports = PublicPage;
