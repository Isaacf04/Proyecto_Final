
/**
 * sub page containing specific selectors and methods for a specific page
 */
 class SpecialistPage {
    /**
     * define selectors using getter methods
     */
    
    
       
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async open (url) {
        await  browser.setupInterceptor();
        
       
        return await browser.url(url);
     }

    async verifySpecialistRequest () {
       await browser.expectRequest('GET', 'https://javito-prod.herokuapp.com/v1/specialist/bfea3295-af20-4824-8bed-170a227b c1e6', 200); // can validate a URL with regex, too    
       await browser.getExpectations();
       await browser.assertExpectedRequestsOnly(); // validate only one request      
     }  
}

module.exports = new SpecialistPage();
