
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
      await browser.pause(3000); // waitRequest did not work, seems webdriverio has issues. Added pause instead.
       await browser.expectRequest('GET', 'https://javito-prod.herokuapp.com/v1/specialist/bfea3295-af20-4824-8bed-170a227b c1e6', 404); // Updated to status code 404   
       await browser.getExpectations();
       await browser.assertExpectedRequestsOnly(); // validate only one request      
     }  

      async waitRequest() {
      const elem = await $('.title h3')
       elem.waitUntil(function () {        
          return elem.getText() === 'Contacto';
      }, {
          timeout: 5000,
          timeoutMsg: 'expected text to be different after 10s'
      });
     }
}

module.exports = new SpecialistPage();
