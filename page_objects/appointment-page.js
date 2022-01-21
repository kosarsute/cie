"use strict";

class Appointment {

get $scheduleVaccineAppointmentBtn() {return $('[class="mat-tooltip-trigger"]'); }
get $$appointmentTimeBtn() {return $$('[class="mat-focus-indicator slot-btn-slot w-130px mat-stroked-button mat-button-base ng-star-inserted"]'); }
get $scheduleAppointmentBtn() {return $("span=Schedule Appointment"); }
get $closeConfirmationBtn() { return $("span=Close"); }
get $cancelAppointmentBtn() {return  $("span=Cancel Appointment"); }
get $confirmCancelAppointmentBtn() {return $("span=Yes, Cancel Appointment"); }
get $$appointmentDateBtn() {return $$('[class="full-date fs-30 fw-500 text-center m-0"]'); }

SelectAppointmentTime(time) {
    const appointmentTime = {};
    browser.waitUntil(() => {
        return this.$$appointmentTimeBtn.map((elem) => elem.isDisplayed()).length > 4;
    }, { timeout: 10000, timeoutMsg: 'Not all elements were visible' });
    this.$$appointmentTimeBtn.forEach(element => {
        appointmentTime[element.getText()] = element;
    });
    //console.log(Object.keys(appointmentTime))
    appointmentTime[time].click();
}

SelectAppointmentDate(date) {
    const appointmentDate = {};
    browser.waitUntil(() => {
        return this.$$appointmentDateBtn.map((elem) => elem.isDisplayed()).length > 1;
    }, { timeout: 10000, timeoutMsg: 'Not all elements were visible' });
    this.$$appointmentDateBtn.forEach(element => {
        appointmentDate[element.getText()] = element;
    });
    //console.log(Object.keys(appointmentDate))
    appointmentDate[date].click();
}

}
module.exports = new Appointment();

