const BasePage = require('./BasePage');
const { By, Key } = require('selenium-webdriver');

class InternPage extends BasePage {

    async getURL(URL){
        await this.url(URL)
    }

    async loginIntern (email, password) {
        const Username = await this.findElement(By.name('email'));
        await Username.sendKeys(email);
        const Password = await this.findElement(By.name('password'));
        await Password.sendKeys(password);
        const Signin = await this.findElement(By.xpath('/html/body/div/div/div[1]/form/button'));
        await Signin.click();
    }
}

module.exports = InternPage;