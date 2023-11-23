import { By, Builder, Key, until } from "selenium-webdriver";
import { headerComponent } from "../components/index.js";
var driver = await new Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({implicit: (10000)});
driver.manage().window().maximize();

export default class basePage {
    constructor() {
        global.driver = driver;
        //this.url = url;
        this.header = new headerComponent()
    }
    
    // open() {
    //     return driver.get(this.url);
    // }

    async goToUrl(url) {
        await driver.get(url);
    }

    async textInputToField(locator, text) {
        //clearing the input field from unexpected symbols
        await driver.findElement(By.css(locator)).clear();
        //typing text to the input field
        await driver.findElement(By.css(locator)).sendKeys(text);
    }

    async getElementByLocator(locator) {
        return await driver.findElement(By.css(locator));
    }

    async clickOn(locator) {
        await driver.findElement(By.css(locator)).click();
    }

    async waitForVisibleElement(locator) {
        //await driver.wait(until.elementIsVisible(this.getElementByLocator(locator)));
        await driver.wait(until.elementIsVisible(driver.findElement(By.css(locator))), 30000);
    }

    async switchToActiveTab(){
        let allWindows = await driver.getAllWindowHandles();
        let l = allWindows.length;
        await driver.switchTo().window(allWindows[l-1]);
        await driver.navigate().refresh();
    }

    async scrollToElement(locator) {
        await driver.actions().scroll(0,0,0,0, await driver.findElement(By.css(locator)));
        //await driver.actions().scroll(0,0,0,0, this.getElementByLocator(locator));
    }

    async getTextFromElement(locator) {
        return await driver.findElement(By.css(locator)).getAttribute("text");
        //await driver.findElement(By.css(locator)).getAttribute("text");
        // const elem = await driver.findElement(By.css(locator));
        // return await elem.getTextFromElement();
        // let s = this.getElementByLocator(locator);
        // return await s.getAttribute("text");

    }
    

    // async waitForActiveElement(locator) {

    // }

    async closeBrowser() {
        await driver.quit();
    }
}
