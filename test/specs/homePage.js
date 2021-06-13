const HomePage = require('../pageobjects/home.page');


describe('My home page', () => {

    before(async () =>  {
        await HomePage.open();
    })

    it('Clicking on search do not redirect to new page:a', async () => {
            
      await HomePage.clickSearch();
      await HomePage.validatePageDoNotChange();
    
    });

    it('Clicking on especialidad, then it focus and change placeholder:b', async () => {
            
        await LoginPage.verifyPlaceholderAfterClickingEspecialidad();       
      
      });

    it('Validate search by Maria shows Maria specialist:c', async () => {
        let name = "Maria";
        await LoginPage.typeMariaOnSearchBar(name);
        await this.clickSearch();
                          
      });
});


