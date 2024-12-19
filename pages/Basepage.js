const {By} = require('selenium-webdriver');
class BasePage {
    constructor(driver) {
        this.driver = driver;
    }
    // clck element
    async clickElement(locator) {
        const element = await this.driver.findElement(locator);
        await element.click();
    }

    // Find element
    async findElementInput(locator, text) {
        const element = await this.driver.findElement(locator);
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
        const element = await this.findElement(locator);
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
