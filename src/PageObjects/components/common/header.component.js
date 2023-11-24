import baseComponent from "./base.component.js";

export default class headerComponent extends baseComponent {
    constructor() {
        super("header.main-header");
    }


    field(param){
        const selectors = {
            search: "input[aria-label='Search']"
        };
        return this.RootElement.findElement(By.css(selectors[param]));
    }

    button(param){
        const selectors = {
            home: ".navbar-brand",
            categories: "div.wsmenu",
            searchButton: "button[aria-label='Search']",
            deliveryDrop: "li.header-country",
            languageDrop: "li.header-language",
            accountDrop: "li.header-account",
            cart: "li.header-cart"
        };
        return this.RootElement.findElement(By.css(selectors[param]));
    }
    // get homeBtn() {
    //     return driver.findElement(By.css(".navbar-brand"));
    // }
    
    // get categories() {
    //     return driver.findElement(By.css("div.wsmenu"));
    // }

    // get searchInputField() {
    //     return driver.findElement(By.css("input[aria-label='Search']"));
    // }

    // get searchButton() {
    //     return driver.findElement(By.css("button[aria-label='Search']"));
    // }

    // get deliveryDrop() {
    //     return driver.findElement(By.css("li.header-country"));
    // }

    // get languageDrop() {
    //     return driver.findElement(By.css("li.header-language"));
    // }
    
    // get accountDrop() {
    //     return driver.findElement(By.css("li.header-account"));
    // }

    // get cart() {
    //     return driver.findElement(By.css("li.header-cart"));
    // }
}