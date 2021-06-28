const HomePage = require('../pageobjects/home.page');
const searchPage = require('../pageobjects/search.Page');

describe('My home page', () => {

    beforeEach(async () =>  {
        await HomePage.open('/#');
    })

    it('Clicking on search do not redirect to new page:a', async () => {
            
      await HomePage.clickSearch();
      await HomePage.validatePageDoNotChange();
    
    });

    it('Clicking on especialidad, then it focus and change placeholder:b', async () => {
            
        await HomePage.verifyPlaceholderAfterClickingEspecialidad();       
      
      });

    it('Validate search by Maria shows Maria specialist:c', async () => {
        let name = "Maria";
        await searchPage.validatePageLoaded(name);                               
      });
});


