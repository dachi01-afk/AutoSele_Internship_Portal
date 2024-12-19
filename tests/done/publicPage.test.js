const PublicPage = require("../../pages/PublicPage");
const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const chai = require('chai');
const expect = chai.expect;

describe("Test Public Page", function () {
    
    let publicPage = new PublicPage();
    beforeEach(async () => {
        let url = 'https://dev1.cyberprimatama.id/';
        await publicPage.getURL(url);
        await publicPage.sleep();   
    })

        it("Home", async () => {
            await publicPage.clickButtonBeranda();

            let expectTitle = "Internship Portal";
            let actualTitle = await publicPage.findTitle();
            expect(actualTitle).to.equal(expectTitle);
            
        })

        it("Bergabung", async () => {
            await publicPage.clickButtonBergabung();

            let expectUrl = "https://dev1.cyberprimatama.id/login";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Login", async () => {
            await publicPage.clickButtonMasuk();

            let expectUrl = "https://dev1.cyberprimatama.id/login";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Register", async () => {
            await publicPage.clickButtonDaftar();

            let expectUrl = "https://dev1.cyberprimatama.id/register";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Lowongan Terpopuler", async () => {
            await publicPage.clickTopJobs1();

            let expectText = "Job Details";
            let actualText = await publicPage.findText('/html/body/div/div/h1');
            expect(actualText).to.equal(expectText);
        });

        it("Lamar", async () => {
            await publicPage.clickTopJobs1();
            await publicPage.clickLamarSekarang();

            let expectUrl = "https://dev1.cyberprimatama.id/login";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Lihat Lebih Banyak", async () => {
            await publicPage.clickButtonLihatLebihBanyak();

            let expectUrl = "https://dev1.cyberprimatama.id/universities";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Telusuri Lowongan", async () => {
            await publicPage.clickButtonTL();

            let expectUrl = "https://dev1.cyberprimatama.id/jobs";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Filter", async () => {
            await publicPage.clickButtonTL();
            await publicPage.filterjobs();

            let expectText = "PT Cyberindo Aditama (CBN)";
            let actualText = await publicPage.findText('/html/body/div/div/div/div/div[2]/div[2]/div/div[2]/a/div[1]/div/h5');
            expect(actualText).to.equal(expectText);
        });

        it("Detil Lowongan", async () => {
            await publicPage.clickButtonTL();
            await publicPage.jobafterFilter();

            let expectText = "Job Details";
            let actualText = await publicPage.findText('/html/body/div/div/h1');
            expect(actualText).to.equal(expectText);
        });

        it("Telusuri jobs", async () => {
            await publicPage.clickButtonTL();
            await publicPage.search('Strategic ');

            let expectText = "Strategic Organization and Learning Development Department Head";
            let actualText = await publicPage.findText('/html/body/div/div/div/div/div[2]/div[2]/div/div[2]/a/div[2]/h5');
            expect(actualText).to.equal(expectText);
        });

        it("Kembali", async () => {
            await publicPage.clickButtonTL();
            await publicPage.jobafterFilter();
            await publicPage.buttonKembali();

            let expectUrl = "https://dev1.cyberprimatama.id/jobs";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Perusahaan", async () => {
            await publicPage.clickButtonPerusahaan();

            let expectUrl = "https://dev1.cyberprimatama.id/companies";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Universitas", async () => {
            await publicPage.clickButtonUniversitas();

            let expectUrl = "https://dev1.cyberprimatama.id/universities";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Telusuri unv", async () => {
            await publicPage.clickButtonUniversitas();
            await publicPage.search('unpri');

            let expectText = "Sumatera Utara";
            let actualText = await publicPage.findText('/html/body/div/div/div[3]/div/p');
            expect(actualText).to.equal(expectText);
        });

        it("Detil Universitas", async () => {
            await publicPage.clickButtonUniversitas();
            await publicPage.search('unpri');
            await publicPage.cekdetailUniv();
            
            let expectText = "University Details";
            let actualText = await publicPage.findText('/html/body/div/div/h1');
            expect(actualText).to.equal(expectText);
        });

        it("Tentang CBN", async () => {
            await publicPage.clickTentangCBN();

            let expectUrl = "https://dev1.cyberprimatama.id/";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

    after(async () => {
        await publicPage.closeBrowser()});    
    
}); 