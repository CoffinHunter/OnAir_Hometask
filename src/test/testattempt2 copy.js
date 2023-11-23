import { describe, it, afterEach } from "node:test";
import homePage from "../PageObjects/pages/home.page.js";
import { setTimeout } from "node:timers/promises";
import { should, expect, assert } from "chai";
import { By, Builder, until, Key } from "selenium-webdriver";
import { pages } from "../PageObjects/index.js";
const homepage = new homePage();

describe('test suite attempt', function(){

    beforeEach(async() => {
        // var driver = await new Builder().forBrowser("chrome").build().manage().window().maximize();
        // await driver.get('https://www.ubuy.com.pl/en/category/electronics-172282');
    })
    it('Should perform search by string and find product', async function(){
        // var driver = await new Builder().forBrowser("chrome").build();
        // await driver.manage().window().maximize();
        //await driver.get('https://www.ubuy.com.pl/en/category/electronics-172282');
        //await pages('home').textInputToField(pages('home').header.field('search'), 'ASUS ROG Strix G16');
        var url = 'https://www.ubuy.com.pl/en/category/electronics-172282';
        await homepage.openUrl(url);
        await homepage.performSearch("ASUS ROG Strix G16 G614JV-ES94");
        //a[title='ASUS ROG Strix G16 G614JV-ES94']
        //await driver.findElement(By.css("input[aria-label='Search']")).clear();
        //await driver.findElement(By.css("input[aria-label='Search']")).sendKeys("ASUS ROG Strix G16");
        await homepage.waitForVisibleElement("a[title='ASUS ROG Strix G16 G614JV-ES94']");
        //await driver.wait(until.elementIsVisible(await driver.findElement(By.css("input.search-box-text[value='ASUS ROG Strix G16']"))));
        await driver.findElement(By.css("button[aria-label='Search']")).click();
        await setTimeout(5000);
        await driver.wait(until.elementIsVisible(await driver.findElement(By.css("#usstore-products > div:nth-child(15)"))));
        assert.exists(await driver.findElement(By.css("#usstore-products > div:nth-child(15)")));
        //await driver.findElement(By.xpath)
        //await driver.quit();
    });

    // it('Should open product from search', async function(){
    //     var driver = await new Builder().forBrowser("chrome").build();
    //     await driver.manage().window().maximize();
    //     await driver.get('https://www.ubuy.com.pl/en/category/electronics-172282');
    //     await driver.findElement(By.css("input[aria-label='Search']")).clear();
    //     await driver.findElement(By.css("input[aria-label='Search']")).sendKeys("ASUS ROG Strix G16");
    //     //await driver.wait(until.elementIsVisible(await driver.findElement(By.css("input.search-box-text[value='ASUS ROG Strix G16']"))));
    //     await driver.findElement(By.css("button[aria-label='Search']")).click();
    //     await driver.wait(until.elementIsVisible(await driver.findElement(By.css("#usstore-products > div:nth-child(15)"))));
    //     await driver.findElement(By.css("#usstore-products > div:nth-child(15)")).click();
    //     //String tb = Key.chord(Key.CONTROL,Key.TAB);
    //     let f = await driver.getAllWindowHandles();
    //     //console.log(await driver.getAllWindowHandles());
    //     await driver.switchTo().window(f[1]);
    //     await driver.wait(until.elementIsVisible(await driver.findElement(By.css("button.add-to-cart-btn"))), 4000);
    //     assert.exists(await driver.findElement(By.css("div.product-detail-section")));
    //     await setTimeout(5000);
    //     //await driver.quit();
    // });

    // it('Should add product to cart', async function(){
    //     var driver = await new Builder().forBrowser("chrome").build();
    //     await driver.manage().window().maximize();
    //     await driver.get('https://www.ubuy.com.pl/en/category/electronics-172282');
    //     await driver.findElement(By.css("input[aria-label='Search']")).clear();
    //     await driver.findElement(By.css("input[aria-label='Search']")).sendKeys("ASUS ROG Strix G16");
    //     await driver.findElement(By.css("button[aria-label='Search']")).click();
    //     await driver.wait(until.elementIsVisible(await driver.findElement(By.css("#usstore-products > div:nth-child(15)"))));
    //     await driver.findElement(By.css("#usstore-products > div:nth-child(15)")).click();
    //     let f = await driver.getAllWindowHandles();
    //     await driver.switchTo().window(f[1]);
    //     await driver.wait(until.elementIsVisible(await driver.findElement(By.css("button.add-to-cart-btn"))), 4000);
    //     let namePC = await driver.findElement(By.css("h1.title.mb-2")).getAttribute("text");
    //     await driver.actions().scroll(0,0,0,0, await driver.findElement(By.css("button.add-to-cart-btn")));
    //     await driver.findElement(By.css("button.add-to-cart-btn")).click();
    //     await driver.wait(until.elementIsVisible(await driver.findElement(By.css("#add-to-cart-view-cart"))));
    //     await driver.findElement(By.css("#add-to-cart-view-cart")).click();
    //     await driver.wait(until.elementIsVisible(await driver.findElement(By.css("div.order-summary"))), 4000);
    //     let cartItemName = await driver.findElement(By.css("li.item-detail>p.h2-heading")).getAttribute("text");
    //     assert.strictEqual(namePC, cartItemName, 'and now you can see the same item you added to the cart exactly in the cart');
    //     await setTimeout(5000);
    //     await driver.quit();
    // });

    // afterEach(async function(){
    //     await driver.quit();
    // })
})