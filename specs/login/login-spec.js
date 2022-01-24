const Login = require('../../page_objects/login-page');
const Appointment = require('../../page_objects/appointment-page');
const Credentials = require('../../data/credentials.json');

const { expect } = require("chai");

const email = Credentials.admin.login.email;
const password = Credentials.admin.login.password;

describe('Login', () => {
    beforeEach(function () {
        browser.url('./')
    });

    it('should be able to login with matching credentials', () => {
        // User should be able to login
        Login.login({email: email, password: password});
        browser.waitUntil(() => {
            return Login.$$header.map((elem) => elem.isDisplayed()).length > 3;
        }, { timeout: 10000, timeoutMsg:'Three elements were not visible'});
        // Verify phone number, email adress, address and birthday
        const array = Login.$$header.map(text=>text.getText())
        expect(array).to.contain('6157565765')
        expect(array).to.contain('testpatient107@mailinator.com')
        expect(array).to.contain('123 Pacific Dr Fullerton, CA')
        expect(Login.$ageHeader.getText()).to.equal('Nov 11, 2000 | Male')
        // Schedule appointment for Round 1
        Appointment.$scheduleVaccineAppointmentBtn.click()
        //Select date for appointment
        Appointment.SelectAppointmentDate('Jan 28, 2022')
        //Select time for appointment
        Appointment.SelectAppointmentTime('query_builder 1:00 AM')
        // Click on schedule appointment
        Appointment.$scheduleAppointmentBtn.click()
        // Close confirmation button 
        Appointment.$closeConfirmationBtn.click()
        // Cancel appointment and verify it
        Appointment.$cancelAppointmentBtn.click()
        Appointment.$confirmCancelAppointmentBtn.click()
        browser.waitUntil(() => {
            return Appointment.$scheduleAppointmentBtn.isDisplayed();
        }, { timeout: 10000, timeoutMsg:'Schedule appointment button did not show up after 10 seconds'});
    })
})

      


