const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchBar () { return $('#input[value="Buscar"]') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async typeSearch () {
        await (await this.searchBar).click();
       
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return await browser.url();
    }
}

module.exports = new LoginPage();
