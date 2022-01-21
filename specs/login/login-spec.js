const Login = require('../../page_objects/login-page')
const Appointment = require('../../page_objects/appointment-page')
const Credentials = require('../../data/credentials.json')
const { expect } = require("chai");
const email = Credentials.admin.login.email;
const password = Credentials.admin.login.password;

describe('Login', () => {
    beforeEach(function () {
        browser.url('./')
    });
    it('should be able to login with matching credentials', () => {
        Login.login({email: email, password: password});
        expect(Login.$$header[0].getText()).to.equal('6157565765')
        expect(Login.$$header[1].getText()).to.equal('testpatient107@mailinator.com')
        expect(Login.$$header[4].getText()).to.equal('123 Pacific Dr Fullerton, CA')
        expect(Login.$ageHeader.getText()).to.equal('Nov 11, 2000 | Male')
        Appointment.$scheduleVaccineAppointmentBtn.click()
        Appointment.SelectAppointmentDate('Friday\nJan 28, 2022')
        Appointment.SelectAppointmentTime('query_builder 1:00 AM')
        Appointment.$scheduleAppointmentBtn.click()
        Appointment.$closeConfirmationBtn.click()
        Appointment.$cancelAppointmentBtn.click()
        Appointment.$confirmCancelAppointmentBtn.click()
        browser.waitUntil(() => {
            return Appointment.$scheduleAppointmentBtn.isDisplayed();
        }, { timeout: 10000, timeoutMsg:'Schedule appointment button did not show up after 10 seconds'});
    })
})


