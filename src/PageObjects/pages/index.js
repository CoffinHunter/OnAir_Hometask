import cartPage from "./cart.page.js";
import homePage from "./home.page.js";
import productPage from "./product.page.js";
import searchResultPage from "./searchResult.page.js";

function pages(name) {
    const items = {
        cart: new cartPage(),
        home: new homePage(),
        product: new productPage(),
        search: new searchResultPage()
    }
    return items[name];
}

export default {
    cartPage,
    homePage,
    productPage,
    searchResultPage,
    pages
}