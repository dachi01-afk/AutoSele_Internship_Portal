const BasePage = require('./BasePage');
const { By, Key } = require('selenium-webdriver');

class PublicPage extends BasePage {

    async getURL(URL){
        await this.url(URL)
    }
    // Halaman Beranda
    async clickButtonBeranda() {
        const beranda = await this.findElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[1]/span'));
        await beranda.click();
    }

    async clickButtonBergabung(){
        const button = await this.findElement(By.xpath('/html/body/div[1]/div/a'));
        await button.click();
    }

    async clickButtonMasuk(){
        const button = await this.findElement(By.xpath('/html/body/nav/div/div[2]/div/a[1]'));
        await button.click();
    }

    async clickButtonDaftar(){
        const button = await this.findElement(By.xpath('/html/body/nav/div/div[2]/div/a[2]'));
        await button.click();
    }

    async clickButtonTL(){
        const button = await this.findElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[2]/span'));
        await button.click();
    }

    async clickButtonPerusahaan() {
        const button = await this.findElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[3]/span'));
        await button.click();
    }

    async clickButtonUniversitas () {
        const button = await this.findElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[4]/span'));
        await button.click();
    }

    async cekdetailUniv() {
        const clickdetail = await this.findElement(By.xpath('//*[@id="splide11-slide01"]/div'));
        await clickdetail.click();
    }

    async clickTentangCBN () {
        const clickTentangCbn = await this.findElement(By.xpath('/html/body/nav/div/div[1]/div[1]/a[5]/span'));
        await clickTentangCbn.click();
    }

    async clickTopJobs1(){
        // await driver.executeScript('window.scrollBy(0, 100)');
        const button = await this.findElement(By.xpath('/html/body/div[2]/div/div/a[1]'));
        await button.click();
    }

    async clickLamarSekarang() {
        const button = await this.findElement(By.xpath('/html/body/div/div/div/div[1]/div[1]/form/button'));
        await button.click();
    }

    async clickButtonLihatLebihBanyak () {
        const button = await this.findElement(By.xpath('/html/body/div[3]/a'));
        await button.click();
    }

    async filterjobs () {
        // filter perusahaan -> PT Cyberindo Aditama (CBN)
        const filterP = await this.findElement(By.xpath('/html/body/div/div/div/div/div[2]/div[1]/div/div[3]/div[1]/div/div[2]/label'));
        await filterP.click();
        
        // filter lokasi -> jakarta
        const filterL = await this.findElement(By.xpath('/html/body/div/div/div/div/div[2]/div[1]/div/div[3]/div[2]/div/div[3]/label'));
        await filterL.click(); 
        
        // filter durasi magang -> 1 Bulan sampai 7 bulan
        const filterD = await this.findElement(By.xpath('/html/body/div/div/div/div/div[2]/div[1]/div/div[3]/div[3]/div[1]/div/div/div[3]'));
        await filterD.click(); 
    }

    async jobafterFilter() {
        const jobs = await this.findElement(By.xpath('/html/body/div/div/div/div/div[2]/div[2]/div/div[2]/a[2]'));
        await jobs.click();
    }

    async search (value) {
        const search = await this.findElement(By.xpath('//input[@id="search"]'));
        await search.sendKeys(value);
    }

    async buttonKembali () {
        const back = await this.findElement(By.xpath('/html/body/div/div/a'));
        await back.click();
    }

}

module.exports = PublicPage;
