const HomePage = require('../pageobjects/home.page');
const specialistPage = require('../pageobjects/specialist.page');


describe('Specialist', () => {

    // beforeEach(async () =>  {
    //     await HomePage.open();
    //     await specialistPage.open('/#/specialist/bfea3295-af20-4824-8bed-170a227b%20c1e6');
    //     await browser.pause(10000);        
    // })

    it('Valdate the correct request after visiting specialist', async () => {
        await HomePage.open();
        await specialistPage.open('/#/specialist/bfea3295-af20-4824-8bed-170a227b%20c1e6'); 
        await browser.pause(1000);         
        await specialistPage.verifySpecialistRequest();
      
          
    });
});
