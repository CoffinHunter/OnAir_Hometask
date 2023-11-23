import { describe, it, afterEach } from "node:test";
import { should, expect, assert } from "chai";
import { pages } from "../src/PageObjects/index.js";
var url = 'https://www.ubuy.com.pl/en/category/electronics-172282';


describe('test suite attempt', function(){

    beforeEach(async() => {

    })

    it('Should perform search by string and find product', async function(){
        await pages('home').openUrl(url);
        await pages('home').performSearch("ASUS ROG Strix G16 G614JV-ES94");
        await pages('search').waitForVisibleElement(".product-inner-list");
        await pages('search').waitForVisibleElement("a[title='ASUS ROG Strix G16 G614JV-ES94']");
        assert.exists(pages('search').getElementByLocator("a[title='ASUS ROG Strix G16 G614JV-ES94']"));
    });

    it('Should open product from search', async function(){
        await pages('home').openUrl(url);
        await pages('home').performSearch("ASUS ROG Strix G16 G614JV-ES94");
        await pages('search').waitForVisibleElement("a[title='ASUS ROG Strix G16 G614JV-ES94']");
        await pages('search').clickOn("a[title='ASUS ROG Strix G16 G614JV-ES94']");
        await pages('search').switchToActiveTab();
        await pages('product').waitForVisibleElement("button.add-to-cart-btn");
        assert.exists(pages('product').getElementByLocator("div.product-detail-section"));
    });

    it('Should add product to cart', async function(){
        await pages('home').openUrl(url);
        await pages('home').performSearch("Fortinet FortiGate-1500D-DC");
        await pages('search').waitForVisibleElement("a[title*='Fortinet FortiGate-1500D-DC']");
        await pages('search').clickOn("a[title*='Fortinet FortiGate-1500D-DC']");
        await pages('search').switchToActiveTab();
        await pages('product').waitForVisibleElement("button.add-to-cart-btn");
        let productName = await pages('product').getTextFromElement("h1.title.mb-2");
        await pages('product').scrollToElement("button.add-to-cart-btn");
        await pages('product').clickOn("button.add-to-cart-btn");
        await pages('product').waitForVisibleElement("#add-to-cart-view-cart");
        await pages('product').clickOn("#add-to-cart-view-cart");
        await pages('cart').waitForVisibleElement("div.order-summary");
        let cartItemName = await pages('cart').getTextFromElement("li.item-detail>p.h2-heading");
        assert.strictEqual(productName, cartItemName, 'and now you can see the same item you added to the cart exactly in the cart');
    });

    afterEach(async function(){
        //await pages('home').closeBrowser();
    })
})