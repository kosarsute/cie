const Login = require('../../page_objects/login-page');
const Credentials = require('../../data/credentials.json');

const email = Credentials.admin.login.email;
const password = Credentials.admin.login.password;

describe('Login', () => {
    beforeEach(function () {
        browser.url('./')
    });
    it('should be able to login with matching credentials', () => {
        // User should be able to login
        Login.login({email: email, password: password});
    })
})

      


