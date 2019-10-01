export default class Page {

    open(path) {
        browser.url(path)
    }
    fillField(element, text) {
        element.setValue(text)
    }

    click(element) {
        element.click()
    }

}