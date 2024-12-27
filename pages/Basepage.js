const { until } = require("selenium-webdriver");
class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

     async Get(url) {
        await this.driver.get(url);
    }
    // clck element
    async clickElement(locator) {
        const element = await this.driver.wait(until.elementLocated(locator),15000);
        return await element.click();
    }

    // Find element
    async findElementInput(locator, text) {
        const element = await this.driver.findElement(locator);
        await element.sendKeys(text);
    }

    // edit elemen input
    async editElementInput(locator, text) {
        const element = await this.driver.findElement(locator);
        await element.clear()
        await element.sendKeys(text);
    }

    // Close browser
    async closeBrowser() {
        return await this.driver.quit();
    }

    // Get page title
    async findTitle() {
        return await this.driver.getTitle();
    }

    // Get current URL
    async findCurrentURL() {
        return await this.driver.getCurrentUrl();
    }

    // Get text of an element
    async findText(locator) {
        let element = await this.driver.wait(until.elementLocated(locator) ,10000);
        return await element.getText();
    }

    // Get alert text
    async getAlertText() {
        let alert = await this.driver.switchTo().alert();
        return await alert.getText();
    }

    // Sleep for a specified time
    async sleep(ms = 2000) {
        await this.driver.sleep(ms);
    }
};
module.exports = BasePage;
