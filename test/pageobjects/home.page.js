
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get searchBar () { return $('input[value="Buscar"]') }
    get especialidadButton () { return $('#custom-search-input > ul >li:nth-child(1)') }
    get searchInput () { return $('#search-input') }

    
       
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
        const placeHolder = await $('.overlay-show')
        await expect(placeHolder).toBeDisplayed()
    }

    async typeOnSearchBar (name) {
        await (await this.searchInput).setValue(name); 
        await (await this.searchBar).click()          

    }

    async open () {
       return await browser.url('./#/');
    }
}

module.exports = new HomePage();
