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

    waitForDisplayed(element, time) {
        return element.waitForDisplayed(time)
    }

    waitForEnabled(element, time) {
        return element.waitForEnabled(time)
    }

    getText(element) {
        return element.getText()
    }

}