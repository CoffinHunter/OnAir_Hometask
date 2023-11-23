import basePage from "./base.page.js";

export default class homePage extends basePage {

    async openUrl(url){
        await this.goToUrl(url);
    }

    async performSearch(text){
        var searchField = "input[aria-label='Search']";
        //await driver.findElement(By.css(searchField)).click();
        await this.textInputToField(searchField, text);
        await this.clickOn("button[aria-label='Search']");
        //await this.clickButton("button.ico-search");
    }
}