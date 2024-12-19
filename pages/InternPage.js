const BasePage = require('./BasePage');
const {By} = require('selenium-webdriver');

class InternPage extends BasePage {

    constructor(driver) {
        super(driver);
        this.emailField = By.name('email');
        this.passwordField = By.name('password');
        this.SignIn = By.xpath('/html/body/div/div/div[1]/form/button');
    }

    async inputEmail(email) {
        await this.findElementInput(this.emailField, email);
    }

    async inputPassword(password) {
        await this.findElementInput(this.passwordField, password);
    }

    async buttonSignIn () {
        await this.clickElement(this.SignIn);
    }

}

module.exports = InternPage;