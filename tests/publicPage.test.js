const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const PublicPage = require("../pages/PublicPage");
const {getDriver}= require('../driver/webdriver');
const config = require('../config/config');
const chai = require('chai');
const expect = chai.expect;

describe("Test Public Page", function () {
    let driver;
    let publicPage;

    before(async () => {
        driver = await getDriver();
        publicPage = new PublicPage(driver)
        await driver.manage().window().maximize();
    })

    beforeEach(async () => {
        await driver.get(config.baseURL);   
    })

        it("Home", async () => {
            await publicPage.buttonBeranda();

            let actualTitle = await publicPage.findTitle();
            expect(actualTitle).to.equal("Internship Portal");
        })

        it("Bergabung", async () => {
            await publicPage.buttonBergabung();

            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/login");
        });

        it("Login", async () => {
            await publicPage.buttonMasuk();

            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/login");
        });

        it("Register", async () => {
            await publicPage.buttonDaftar();

            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/register");
        });

        it("Lowongan Terpopuler", async () => {
            await publicPage.clickTopJobs1();

            const expectText ="https://dev1.cyberprimatama.id/jobs/corporate-project-management-and-business-partnership-1"
            const actualText = await publicPage.findCurrentURL();
            expect(actualText).to.equal(expectText);
        });

        it("Lamar", async () => {
            await publicPage.clickTopJobs1();
            await publicPage.clickLamarSekarang();

            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/login");
        });

        it("Lihat Lebih Banyak", async () => {
            await publicPage.buttonLLB();

            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/universities");
        });

        it("Telusuri Lowongan", async () => {
            await publicPage.buttonTL();

            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/jobs");
        });

        it("Filter", async () => {
            await publicPage.buttonTL();
            await publicPage.filterLowonganByCompany();
            await publicPage.filterLowonganByLocation();

            let expectText = "Strategic Organization and Learning Development Department Head";
            let actualText = await publicPage.assHasilFilterTL();
            console.log(actualText);
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

        afterEach(async () => {
            // await publicPage.sleep()
        })

    after(async () => {
        await publicPage.closeBrowser()
    });    
    
}); 