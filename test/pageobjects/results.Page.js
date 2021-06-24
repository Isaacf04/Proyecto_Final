/**
 * sub page containing specific selectors and methods for a specific page
 */
 class ResultsPage {
    /**
     * define selectors using getter methods
     */
    get mariaTextIsDisplayed () { return $('h3[data-v-10f26546]') }
  
    
       
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async validateResultIsMaria () {
        await (await this.mariaTextIsDisplayed).toBeDisplayed();
       
    } 

    async validatePageLoaded () {
        expect(browser).toHaveUrl('search?sp=all&q=maria')
    }
}

module.exports = new ResultsPage();
