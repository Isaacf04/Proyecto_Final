const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My home page', () => {
    it('clicking on search do not redirect', async () => {
        beforeEach(() => {
            await LoginPage.open();
        })
       
        await LoginPage.typeSearch();
    
    });
});


