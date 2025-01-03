const BasePage = require('./BasePage');
const {By} = require('selenium-webdriver'); 

class UnvSupPage extends BasePage {

    constructor(driver) {
        super(driver);
    }

     // Login
    async inputEmail(email) {
        await this.findElementInput(By.name('email'), email);
    }

    async inputPassword(password) {
        await this.findElementInput(By.name('password'), password);
    }

    async buttonSubmit () {
        await this.clickElement(By.xpath('//button[@type  ="submit"]'));
    }

    async Login(email, password) {
        await this.findElementInput(By.name('email'), email)
        await this.findElementInput(By.name('password'), password)
        await this.buttonSubmit();
    }

}

module.exports = UnvSupPage;