export default class Page {

    open(path) {
        browser.url(path)
    }
    fillField(element, text) {
        element.setValue(text)
    }

}