
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get searchBar () { return $('input[value="Buscar"]') }
    get especialidadButton () { return $('#phisical') }
    // get searchInput () { return $('#search-input') }

    
       
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickSearch () {
        await (await this.searchBar).click();
       
    }

    async validatePageDoNotChange () {
        expect(browser).toHaveUrl('/#/')
    }

    async verifyPlaceholderAfterClickingEspecialidad () {
        await (await this.especialidadButton).click();
        const placeHolder = $('placeholder="Ejemplo: Nombre, Especialidad..."')
        placeHolder.isFocused()
        expect(placeHolder).toBeDisplayed()

    }

    async typeMariaOnSearchBar (name) {
        await this.searchBar().addValue(name);           

    }

    async open () {
       return await browser.url('./#/');
    }
}

module.exports = new HomePage();
