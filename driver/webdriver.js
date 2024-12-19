require('chromedriver');
const { Builder } = require('selenium-webdriver');
const config = require('../config/config');

const getDriver = async () => {
    const driver = await new Builder().forBrowser(config.browser).build();
    return driver;
};

module.exports = { getDriver };
