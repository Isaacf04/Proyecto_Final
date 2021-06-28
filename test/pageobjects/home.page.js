
/**
 * sub page containing specific selectors and methods for a specific page
 */

const homePageselectors = {
    searchBarButton: 'input[value="Buscar"]',
    especialidadButton: '#custom-search-input > ul >li:nth-child(1)',
    searchInputButton: '#search-input'

}
class HomePage {
    /**
     * define selectors using getter methods
     */
    get searchBar () { return $(homePageselectors.searchBarButton)}
    get especialidadButton () { return $(homePageselectors.especialidadButton) }
    get searchInput () { return $(homePageselectors.searchInputButton) }

    
       
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

    async open (url) {
       return await browser.url(url);
    }
}

module.exports = new HomePage();
