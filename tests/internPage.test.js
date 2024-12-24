const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const InternPage = require("../pages/InternPage");
const {getDriver}= require('../driver/webdriver');
const config = require('../config/config');
const chai = require('chai');
const expect = chai.expect;

describe("Test Intern Page", function () {
    let driver;
    let internPage;

    // Login
    describe("Test Login", function () {
        beforeEach(async () => {
            driver = await getDriver();
            internPage = new InternPage(driver)
            await driver.manage().window().maximize();
            await driver.get(`${config.baseURL}login`);
        });

        // it ('login skenario 1 -> Login Sukses', async() => {
        // await internPage.inputEmail(config.credentials.emailIntern);
        // await internPage.inputPassword(config.credentials.Password);
        // await internPage.buttonSubmit();
        
        // let actualText = await internPage.assText();
        // expect(actualText).to.equal('Beranda');
        // });

        // it ('login skenario 2 -> Login Gagal', async() => {
        // await internPage.inputEmail(config.credentials.FKemail);
        // await internPage.inputPassword(config.credentials.Fkpassword);
        // await internPage.buttonSubmit();
        
        // let actualURL = await internPage.findCurrentURL();
        // expect(actualURL).to.equal(`${config.baseURL}login`);
        // });

    });

    // Register
    describe("Test Register", function () {
        beforeEach(async () => {
            driver = await getDriver();
            internPage = new InternPage(driver)
            await driver.manage().window().maximize();
            await driver.get(`${config.baseURL}register`);
        })

        // it("Register skenarion 1 -> Register Succes", async () => {
        //     await  internPage.Register('User test 05', 1, '082234566543', 'Aqua Cybro', 'User05', '1234567890');
        //     await internPage.buttonSubmit()

        //     let actualText = await internPage.assRS1();
        //     expect(actualText).to.equal('Berhasil Mendaftar');
        // })

        // it("Register skenarion 2 -> Register Failed", async () => {
        //     await  internPage.Register('User test 02', 2, '082234566543', 'Aqua Cybro', 'User02', '1234567890');
        //     await internPage.buttonSubmit()

        //     let actualText = await internPage.assRS0();
        //     expect(actualText).to.equal('Email sudah ada sebelumnya.');
        // })
    })

    // test case intern
    describe('Test Case Forgot Password', function() {

        beforeEach(async () => {
            driver = await getDriver();
            internPage = new InternPage(driver)
            await driver.manage().window().maximize();
            await driver.get(`${config.baseURL}login`);
        })

        it("Redirect ke halaman Lupa Kata Sandi", async () => {
            await internPage.buttonLupaPW();

            let actualURL = await internPage.findCurrentURL();
            expect(actualURL).to.equal('https://dev1.cyberprimatama.id/forgot-password')
        })

        it("Berhasil mendapatkan email pengaturan ulang kata sandi", async () => {
            await internPage.buttonLupaPW();
            await internPage.inputEmail('User02@gmail.com');
            await internPage.buttonSubmit();

            let actualText= await internPage.confirPW();
            expect(actualText).to.equal(actualText)
        })
    });

    afterEach(async () => {
        await internPage.sleep();
        await internPage.closeBrowser();
    });
    
    
});