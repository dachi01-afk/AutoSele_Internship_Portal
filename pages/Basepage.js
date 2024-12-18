require('chromedriver');
const { By, until } = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.CHROME)
    .build();

driver.manage().setTimeouts({implicit: (10000)});

class BasePage{

    constructor(){
        global.driver = driver;
    }

    // get url
    async url(URL){
        await driver.manage().window().maximize();
        await driver.get(URL);
    }

    // get element
    async findElement(locator){
        return await driver.findElement(locator);
    }

    async findwaitgetElement (locator) {
        return await driver.wait(until.elementLocated(By.xpath(locator)), 10000);
    }

    // close browser
    async closeBrowser(){
        return await driver.quit();
    }

    // get title
    async findTitle() {
        return await driver.getTitle()
    };

    // get currentURL
    async findCurrentURL() {
        return await driver.getCurrentUrl();
    }

    // get Text
    async findText(locator) {
        const GetText = await this.findElement(By.xpath(locator));
        return GetText.getText();
        
    }

    // get wait to text
    async findwaitText (locator) {
        const GetText = await this.findwaitgetElement(locator);
        return GetText.getText();
    }

    async gettextalert () {
        let alert = await driver.switchTo().alert();
        await alert.getText();
    }

    async sleep() {
        await driver.sleep(3000);
    }
}

module.exports = BasePage;