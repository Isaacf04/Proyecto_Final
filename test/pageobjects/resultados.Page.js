
/**
 * sub page containing specific selectors and methods for a specific page
 */

const selectors = {
   mapView: '#map_listing',
   list: '.icon-th-list'
}
 class ResultadosPage {
    /**
     * define selectors using getter methods
     */
     get map () { return $(selectors.mapView) }
     get listButton() {return $(selectors.list)}
     
       
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async clickOnFisica () {          
       
        const language = $('a[type="button"]');
        for (let i = 0; i < language.length; i++ ) {
           if (language = Fisica) {
            language.click()
           }

        }
        expect(browser).toHaveUrl('search?sp=phisical')

        }

        async clickOnLenguage () {          
       
         const language = $('a[type="button"]');
         for (let i = 0; i < language.length; i++ ) {
            if (language = Fisica) {
             language.click()
            }
 
         }
         expect(browser).toHaveUrl('search?sp=language')
 
         }

         async clickOnOcupacional () {          
       
            const language = $('a[type="button"]');
            for (let i = 0; i < language.length; i++ ) {
               if (language = Fisica) {
                language.click()
               }
    
            }
            expect(browser).toHaveUrl('search?sp=ocupational')
    
            }

            async validateMapIsNoDisplayed () {
               await (await this.listButton).click();
               await (await this.map).isExisting();
            }
   }

module.exports = new ResultadosPage();
