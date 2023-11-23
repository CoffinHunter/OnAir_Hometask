import { describe, it, afterEach } from "node:test";
import homePage from "../src/PageObjects/pages/home.page.js";
import { setTimeout } from "node:timers/promises";
import { should, expect, assert } from "chai";
import { By, Builder, until, Key } from "selenium-webdriver";
//import { pages } from "../PageObjects/index.js";
import searchResultPage from "../src/PageObjects/pages/searchResult.page.js";
import productPage from "../src/PageObjects/pages/product.page.js";
import cartPage from "../src/PageObjects/pages/cart.page.js";
const homepage = new homePage();
const searchpage = new searchResultPage();
const productpage = new productPage();
const cartpage = new cartPage();
var url = 'https://www.ubuy.com.pl/en/category/electronics-172282';

describe('Online shop test', function(){

    beforeEach(async() => {

    })
    it('Should perform search by string and find product', async function(){
        await homepage.openUrl(url);
        await homepage.performSearch("ASUS ROG Strix G16 G614JV-ES94");
        await searchpage.waitForVisibleElement(".product-inner-list")
        assert.exists(await searchpage.getElementByLocator("a[title='ASUS ROG Strix G16 G614JV-ES94']"));
    });

    it('Should open product from search', async function(){
        await homepage.openUrl(url);
        await homepage.performSearch("ASUS ROG Strix G16 G614JV-ES94");
        await searchpage.waitForVisibleElement("a[title='ASUS ROG Strix G16 G614JV-ES94']");
        await searchpage.clickOn("a[title='ASUS ROG Strix G16 G614JV-ES94']");
        await searchpage.switchToActiveTab();
        await productpage.waitForVisibleElement("button.add-to-cart-btn");
        assert.exists(productpage.getElementByLocator("div.product-detail-section"));
    });

    it('Should add product to cart', async function(){
        await homepage.openUrl(url);
        await homepage.performSearch("Fortinet FortiGate-1500D-DC");
        await searchpage.waitForVisibleElement("a[title*='Fortinet FortiGate-1500D-DC']");
        await searchpage.clickOn("a[title*='Fortinet FortiGate-1500D-DC']");
        await searchpage.switchToActiveTab();
        await productpage.waitForVisibleElement("button.add-to-cart-btn");
        let productName = await productpage.getTextFromElement("h1.title.mb-2");
        await productpage.scrollToElement("button.add-to-cart-btn");
        await productpage.clickOn("button.add-to-cart-btn");
        await productpage.waitForVisibleElement("#add-to-cart-view-cart");
        await productpage.clickOn("#add-to-cart-view-cart");
        await cartpage.waitForVisibleElement("div.order-summary");
        let cartItemName = await cartpage.getTextFromElement("li.item-detail>p.h2-heading");
        assert.strictEqual(productName, cartItemName, 'and now you can see the same item you added to the cart exactly in the cart');
    });

    // afterEach(async function(){
    //     await driver.quit();
    // })
})