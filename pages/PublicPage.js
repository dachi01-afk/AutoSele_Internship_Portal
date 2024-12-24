const BasePage = require('./BasePage');
const { By} = require('selenium-webdriver');

class PublicPage extends BasePage {

    constructor(driver) {
        super(driver);
        // Locator Halaman Beranda
        this.locatorBeranda   = By.xpath('/html/body/nav/div/div[1]/div[1]/a[1]/span');
        this.locatorBergabung = By.xpath('/html/body/div[1]/div/a');
        this.locatorMasuk     = By.xpath('/html/body/nav/div/div[2]/div/a[1]');
        this.locatorDaftar    = By.xpath('/html/body/nav/div/div[2]/div/a[2]');
        this.locatorTopjob1   = By.xpath('/html/body/div[2]/div/div/a[1]');
        this.locatorLmrSkrng  = By.xpath('/html/body/div/div/div/div[1]/div[1]/form/button');
        this.locatorLbb       = By.xpath('/html/body/div[3]/a')

        // Locator Halaman Telusuri Lowongan
        this.locatorTL        = By.xpath('/html/body/nav/div/div[1]/div[1]/a[2]/span');
        this.locatorFilterP   = By.xpath('/html/body/div/div/div/div/div[2]/div[1]/div/div[3]/div[1]/div/div[2]/label');
        this.locatorFilterL   = By.xpath('/html/body/div/div/div/div/div[2]/div[1]/div/div[3]/div[2]/div/div[2]/label');
        this.locatorJobTL1    = By.xpath('/html/body/div/div/div/div/div[2]/div[2]/div/div[2]/a[1]');
        this.locatorback      = By.xpath('/html/body/div/div/a');

        // locator Halaman Perusanan
        this.locatorPerusahaan= By.xpath('/html/body/nav/div/div[1]/div[1]/a[3]');

        // locator Halaman Universitas
        this.locatorUnv       = By.xpath('/html/body/nav/div/div[1]/div[1]/a[4]/span');
        this.detailUNVunpri   = By.xpath('//*[@id="splide51-slide01"]/div');
        this.locatorDtlUNV01  = By.xpath('/html/body/div/div/div[3]/div[1]/div/div/div/a');

        // locator Halaman Tentang CBn
        this.locatorCbn       = By.xpath('/html/body/nav/div/div[1]/div[1]/a[5]/span');
;
        // locator assertion by text
        this.detailUNVbyProv  = By.xpath('/html/body/div/div/div[3]/div[1]/p');

        // locator search
        this.Search           = By.xpath('//input[@id="search"]');
    }

    //Halaman Beranda
    async buttonBeranda () {
        await this.clickElement(this.locatorBeranda);
    }

    async buttonBergabung(){
        await this.clickElement(this.locatorBergabung);
    }

    async buttonMasuk(){
        await this.clickElement(this.locatorMasuk);
    }

    async buttonDaftar(){
        await this.clickElement(this.locatorDaftar);
    }

    async clickTopJobs1(){
        await this.clickElement(this.locatorTopjob1);
    }

    async clickLamarSekarang() {
        await this.clickElement(this.locatorLmrSkrng);
    }

    async buttonLLB() {
        await this.clickElement(this.locatorLbb)
    }

    
    // Halaman Telusuri Lowongan
    async buttonTL(){
        await this.clickElement(this.locatorTL);
    }

    async filterLowonganByCompany() {
        // filter perusahaan -> PT Cyberindo Aditama (CBN)
        await this.clickElement(this.locatorFilterP);
    }

    async filterLowonganByLocation() {
        // filter lokasi -> jakarta
        await this.clickElement(this.locatorFilterL);
    }

    async clickJobTL1() {
        //pilih job pertama untuk cek detail
        await this.clickElement(this.locatorJobTL1);
    }

    async buttonKembali () {
        await this.clickElement(this.locatorback);
    }

    // Halaman Perusahaan
    async buttonPerusahaan() {
        await this.clickElement(this.locatorPerusahaan);
    }


    // Halaman Universitas
    async buttonUniversitas () {
        await this.clickElement(this.locatorUnv);
    }

    async cekdetailUniv01() {
        await this.clickElement(this.locatorDtlUNV01);
    }


    // Halaman Tentang CBN
    async tentangCBN () {
        await this.clickElement(this.locatorCbn);
    }

    // Asertion By Text
    async assUnivByProv() {
        await this.findText(this.detailUNVbyProv);
    }

    // search 
    async inputSearch(testSearch) {
        await this.findElementInput(this.Search, testSearch);
    }
}

module.exports = PublicPage;
