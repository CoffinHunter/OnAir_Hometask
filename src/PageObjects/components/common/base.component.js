export default class baseComponent {
    constructor(rootSelector) {
        this.rootSelector = rootSelector;
    }

    get RootElement() {
        return driver.findElement(By.css(this.rootSelector));
    }
}