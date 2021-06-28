const homePage = require('../pageobjects/home.page');
const ResultadosPage = require('../pageobjects/resultados.Page');
const searchPage = require('../pageobjects/search.Page');

describe('Resultados de especialidad', () => {
  beforeEach(async () => {
    await homePage.open('/#/search?');
  });

  it('Valdate the correct specilist after clickingh on each field', async () => {
    await ResultadosPage.clickOnFisica();

    await ResultadosPage.clickOnLenguage;

    await ResultadosPage.clickOnOcupacional;
  });

  it('Validate search by Maria shows Maria specialist:c', async () => {
    let name = 'Maria';
    await searchPage.validatePageLoaded(name);
  });

  it('Validate the map dissapears from UI after switching from map to list ', async () => {
    await ResultadosPage.validateMapIsNoDisplayed();
  });
});
