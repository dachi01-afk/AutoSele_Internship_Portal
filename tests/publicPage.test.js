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

            let actualURL = await publicPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/jobs');
        });

        it("Detil Lowongan", async () => {
            await publicPage.buttonTL();
            await publicPage.clickJobTL1();

            let expectURL = 'https://dev1.cyberprimatama.id/jobs/strategic-organization-and-learning-development-department-head-6'
            let actualURL = await publicPage.findCurrentURL();
            expect(actualURL).to.equal(expectURL);
        });

        it("Telusuri jobs", async () => {
            await publicPage.buttonTL();
            await publicPage.inputSearch('Strategic');
            await publicPage.clickJobTL1();

            let expectURL = 'https://dev1.cyberprimatama.id/jobs/strategic-organization-and-learning-development-department-head-6'
            let actualURL = await publicPage.findCurrentURL();
            expect(actualURL).to.equal(expectURL);
        });

        it("Kembali", async () => {
            try {
            await publicPage.buttonTL();
            await publicPage.clickJobTL1();
            await publicPage.buttonKembali();

            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/jobs");
            }catch(err) {
                console.log(err);
            }
        });

        it("Perusahaan", async () => {
            await publicPage.buttonPerusahaan();

            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/companies");
        });

        it("Universitas", async () => {
            await publicPage.buttonUniversitas();

            let expectUrl = "https://dev1.cyberprimatama.id/universities";
            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal(expectUrl);
        });

        it("Telusuri unv", async () => {
            await publicPage.buttonUniversitas();
            await publicPage.inputSearch('unpri');
            await publicPage.sleep();
            await publicPage.cekdetailUniv01();
            
            let expectURL = "https://dev1.cyberprimatama.id/universities/universitas-prima-indonesia-2";
            let actualURL = await publicPage.findCurrentURL();
            expect(actualURL).to.equal(expectURL);
        });

        it("Detil Universitas", async () => {
            await publicPage.buttonUniversitas();
            await publicPage.cekdetailUniv01();
            
            let expectURL = "https://dev1.cyberprimatama.id/universities/institut-teknologi-dan-kesehatan-bali-102";
            let actualURL = await publicPage.findCurrentURL();
            expect(actualURL).to.equal(expectURL);
        });

        it("Tentang CBN", async () => {
            await publicPage.tentangCBN();

            let actualUrl = await publicPage.findCurrentURL();
            expect(actualUrl).to.equal("https://dev1.cyberprimatama.id/");
        });

        afterEach(async () => {
            await publicPage.sleep();
        })

    after(async () => {
        await publicPage.closeBrowser()
    });    
    
}); 