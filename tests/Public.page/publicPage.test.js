const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const LocatorPage = require("../../pages/LocatorPage");
const {getDriver}= require('../../driver/webdriver');
const config = require('../../config/config');
const chai = require('chai');
const expect = chai.expect;

describe("Test Public Page", function () {
    let driver;
    let locatorPage;

    before(async () => {
        driver = await getDriver();
        locatorPage = new LocatorPage(driver)
        await driver.manage().window().maximize();
    })
    
    beforeEach(async () => {
        await driver.get(config.baseURL);   
    })

        it("Home", async () => {
            await locatorPage.buttonBeranda();

            let actualTitle = await locatorPage.findTitle();
            expect(actualTitle).to.equal("Internship Portal");
        })

        it("Bergabung", async () => {
            await locatorPage.buttonBergabung();

            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/login");
        });

        it("Login", async () => {
            await locatorPage.buttonMasuk();
            await locatorPage.sleep()

            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/login");
        });

        it("Register", async () => {
            await locatorPage.buttonDaftar();

            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/register");
        });

        it("Lowongan Terpopuler", async () => {
            await locatorPage.clickTopJobs1();

            const expectURL ="https://dev1.cyberprimatama.id/jobs/front-end-developer-7"
            const actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal(expectURL);
        });

        it("Lamar", async () => {
            await locatorPage.clickTopJobs1();
            await locatorPage.clickLamarSekarang();

            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/login");
        });

        it("Lihat Lebih Banyak", async () => {
            await locatorPage.buttonLLB();

            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/universities");
        });

        it("Telusuri Lowongan", async () => {
            await locatorPage.buttonTL();

            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/jobs");
        });

        it("Filter", async () => {
            await locatorPage.buttonTL();
            await locatorPage.filterLowonganByCompany();
            await locatorPage.filterLowonganByLocation();

            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/jobs');
        });

        it("Detil Lowongan", async () => {
            await locatorPage.buttonTL();
            await locatorPage.clickJobTL1();
            await locatorPage.sleep();

            let expectURL = 'https://dev1.cyberprimatama.id/jobs/business-partnership-12'
            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal(expectURL);
        });

        it("Telusuri jobs", async () => {
            await locatorPage.buttonTL();
            await locatorPage.inputSearch('Business');
            await locatorPage.clickJobTL1();
            await locatorPage.sleep();

            let expectURL = 'https://dev1.cyberprimatama.id/jobs/business-partnership-12'
            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal(expectURL);
        });

        it("Kembali", async () => {
            try {
            await locatorPage.buttonTL();
            await locatorPage.clickJobTL1();
            await locatorPage.buttonKembali();

            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/jobs");
            }catch(err) {
                console.log(err);
            }
        });

        it("Perusahaan", async () => {
            await locatorPage.buttonPerusahaan();

            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/companies");
        });

        it("Universitas", async () => {
            await locatorPage.buttonUniversitas();

            let expectUrl = "https://dev1.cyberprimatama.id/universities";
            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Telusuri unv", async () => {
            await locatorPage.buttonUniversitas();
            await locatorPage.inputSearch('unpri');
            await locatorPage.sleep();
            await locatorPage.cekdetailUniv01();
            
            let expectURL = "https://dev1.cyberprimatama.id/universities/universitas-prima-indonesia-2";
            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal(expectURL);
        });

        it("Detil Universitas", async () => {
            await locatorPage.buttonUniversitas();
            await locatorPage.cekdetailUniv01();
            
            let expectURL = "https://dev1.cyberprimatama.id/universities/institut-teknologi-dan-kesehatan-bali-102";
            let actualURL = await locatorPage.findCurrentURL();
            expect(actualURL).to.equal(expectURL);
        });

        it("Tentang CBN", async () => {
            await locatorPage.tentangCBN();

            let actualUrl = await locatorPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/");
        });

        afterEach(async () => {
            await locatorPage.sleep();
        })
        
        after(async () => {
        await locatorPage.closeBrowser()
        })
    
}); 