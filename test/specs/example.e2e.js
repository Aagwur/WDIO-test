const { addFeature } = require('@wdio/allure-reporter').default
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
require('dotenv').config()
const user = process.env.USER;
const password = process.env.PASSWORD;

describe('Login application', () => {
    it('Verify that all elements are present on the page', async () => {
        
        await LoginPage.open();

        await expect(LoginPage.inputUsername).toBeExisting();
        await expect(LoginPage.inputPassword).toBeExisting();
        await expect(LoginPage.btnSubmit).toBeExisting();        
    });

    it('Verify that only \'Please enter username.\' error message is present on a page ' +
        'if user enters only password', async () => {

        await LoginPage.login('', password);

        await expect(SecurePage.flashAlert1).toBeExisting();
        await expect(SecurePage.flashAlert1).toHaveTextContaining(
            'Please enter username.');

        await expect(SecurePage.flashAlert2).not.toBeExisting();
    });

    it('Verify that only \'Please enter your password.\' error message is present on a page ' +
        'if user enters only username', async () => {
        await LoginPage.login(user, '');

        await expect(SecurePage.flashAlert1).not.toBeExisting();

        await expect(SecurePage.flashAlert2).toBeExisting();
        await expect(SecurePage.flashAlert2).toHaveTextContaining(
            'Please enter your password.');
    });    

    it('Verify that both \'Please enter username.\' and \'Please enter your password.\' ' +
        'error messages are present on a page if user enters nothing', async () => {
        await LoginPage.login('', '');

        await expect(SecurePage.flashAlert1).toBeExisting();
        await expect(SecurePage.flashAlert1).toHaveTextContaining(
             'Please enter username.');

        await expect(SecurePage.flashAlert2).toBeExisting();
        await expect(SecurePage.flashAlert2).toHaveTextContaining(
            'Please enter your password.');
    });

    it('Verify that \'No account found with that username.\' error message is present on a page ' +
        'if user enters incorrect data', async () => {
        await LoginPage.login(user, password);

        await expect(SecurePage.flashAlert3).toBeExisting();
        await expect(SecurePage.flashAlert3).toHaveTextContaining(
             'No account found with that username.');
    });

});




