const InternPage = require("../pages/InternPage");
const {describe, before, beforeEach, afterEach, after, it} = require("mocha");
const chai = require('chai');
const expect = chai.expect;

describe("Test Intern Page", function () {
    let internPage = new InternPage();

    describe('Login', async () => {
        
        beforeEach(async () => {
            let urlLoginItern = 'https://dev1.cyberprimatama.id/login';
            await internPage.getURL(urlLoginItern);
        })
        it ('login skenario 1 -> Login Sukses', async() => {
        await internPage.loginIntern('test.student@aqua.ac.id', 'internshipportal');
        
        await internPage.sleep();
        let expectUrl = "Magang yang Luar Biasa di CBN Group";
        let actualUrl = await internPage.findText('/html/body/div[1]/div/h1/p[2]');
        expect(actualUrl).to.equal(expectUrl);
        });

        it ('login skenario 1 -> Login Gagal', async() => {
        await internPage.loginIntern('test.studen@aqua.ac.id', 'internshipporta');

        let expectText = "https://dev1.cyberprimatama.id/login";
        let actualText = await internPage.findCurrentURL();
        console.log(actualText);
        expect(actualText).to.equal(expectText);
        });
    })

    afterEach(async () => {
            await internPage.closeBrowser();
        });

    
})