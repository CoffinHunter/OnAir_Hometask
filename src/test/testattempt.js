import { describe, it, afterEach } from "node:test";
import homePage from "../PageObjects/pages/homePage.page.js";
import { setTimeout } from "node:timers/promises";
import { should, expect, assert } from "chai";
import { By, Builder, until } from "selenium-webdriver";
let homepage = new homePage();
describe('test suite attempt', function(){
    beforeEach(functon(), {
    });

    // it('POM search check', async function(){
    //     await homepage.openUrl('https://www.newegg.com/');
    //     await homepage.performSearch("Dell Optiplex 3070 SFF i5-9500");
    //     expect(await homepage.findElement(By.css("input[value='Dell Optiplex 3070 SFF i5-9500']"))).to.exist;
    //     //await setTimeout(10000);
    //     //assert.strictEqual(await driver.findElement(By.css("")));
    //     //assert(await driver.findElement(By.css("div.items-grid-view.item-cells-wrap>div:first-child>div>a>img[title*='Dell Optiplex 3070 SFF i5-9500']")), "Dell Optiplex 3070 SFF i5-9500", "should get the message");
    // });

    // it('Should perform search by string and find product', async function(){
    //     var driver = await new Builder().forBrowser("chrome").build();
    //     await driver.manage().window().maximize();
    //     await driver.get('https://www.newegg.com/');
    //     await driver.findElement(By.css("input[type='search']")).sendKeys("Dell Optiplex 3070 SFF i5-9500");
    //     await driver.wait(until.elementIsVisible(await driver.findElement(By.css("input[value='Dell Optiplex 3070 SFF i5-9500']"))));
    //     await driver.findElement(By.css("button.ico-search")).click();
    //     await setTimeout(5000);
    //     //await driver.wait(until.elementIsVisible(await driver.findElement(By.css("input[value='Dell Optiplex 3070 SFF i5-9500']"))));
    //     assert.exists(await driver.findElement(By.css("div.items-grid-view.item-cells-wrap>div:first-child>div>a>img[title*='Dell Optiplex 3070 SFF i5-9500']")));
    //     await driver.quit();
    // });

    it('Should add product to cart', async function(){
        var driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get('https://www.newegg.com/');
        await driver.findElement(By.css("button.osano-cm-accept-all")).click();
        await setTimeout(5000);
        await driver.findElement(By.css("input[type='search']")).sendKeys("Dell Optiplex 3070 SFF i5-9500");
        await driver.wait(until.elementIsVisible(await driver.findElement(By.css("input[value='Dell Optiplex 3070 SFF i5-9500']"))));
        await driver.findElement(By.css("button.ico-search")).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(By.css("div.items-grid-view.item-cells-wrap>div:first-child>div>div.item-info"))));
        await driver.findElement(By.css("div.items-grid-view.item-cells-wrap>div:first-child>div>div.item-info")).click();
        await setTimeout(5000);
        //assert.exists(await driver.findElement(By.css("div.items-grid-view.item-cells-wrap>div:first-child>div>a>img[title*='Dell Optiplex 3070 SFF i5-9500']")));
        await driver.quit();
    })

    afterEach(async function(){
        await homepage.closeBrowser();
    });
})