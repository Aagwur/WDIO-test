class SecurePage {

    get flashAlert1 () { return $('span=Please enter username.') }
    get flashAlert2 () { return $('span=Please enter your password.') }
    get flashAlert3 () { return $('span=No account found with that username.') }
}

module.exports = new SecurePage();
