class LoginPage {
    get inputUsername () { return $('input[type="text"]') }
    get inputPassword () { return $('input[type="password"]') }
    get btnSubmit () { return $('input[type="submit"]') }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return browser.url('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
    }
}

module.exports = new LoginPage();
