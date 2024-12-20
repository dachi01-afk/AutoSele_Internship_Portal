const BasePage = require('./BasePage');
const {By} = require('selenium-webdriver');

class InternPage extends BasePage {

    constructor(driver) {
        super(driver);
        this.Email          = By.name('email');
        this.Password       = By.name('password');
        this.Submit         = By.xpath('/html/body/div/div/div[1]/form/button');
        this.locatorBeranda = By.xpath('/html/body/nav/div/div[1]/div[1]/a[1]/span');
    }

    async inputEmail(email) {
        await this.findElementInput(this.Email, email);
    }

    async inputPassword(password) {
        await this.findElementInput(this.Password, password);
    }

    async buttonSignIn () {
        await this.clickElement(this.Submit);
    }

    // assertion by text
    async getSuccessMessageText() {
       return await this.findText(this.locatorBeranda);
    }

}

module.exports = InternPage;