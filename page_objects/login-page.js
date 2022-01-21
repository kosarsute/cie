"use strict";

class Login {

get $emailTxt() {return $('[placeholder="Enter username or email"]'); }
get $passwordTxt() {return $('[placeholder="Enter password"]'); }
get $logInBtn() {return $('[class="mr-4 ng-tns-c155-3"]'); }
get $$header() {return $$('.card-text'); }
get $ageHeader() {return $('[class="sub-heading"]'); }

login({ email, password }) {
    this.$emailTxt.setValue(email);
    this.$passwordTxt.setValue(password);
    this.$logInBtn.click();
    browser.waitUntil(() => {
        return this.$$header.map((elem) => elem.isDisplayed()).length > 5;
    }, { timeout: 10000, timeoutMsg:'5 elements were not visible'});
}
}
module.exports = new Login();