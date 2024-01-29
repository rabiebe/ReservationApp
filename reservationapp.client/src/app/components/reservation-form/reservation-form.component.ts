import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent  {
  
  applyForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    numberOfGuests: new FormControl('')
  })

  initiateReservation() {
    console.log('xxreservationForm', this.applyForm);

    // if (this.applyForm.valid) {
    //   const reservationData: Reservation = this.applyForm.value;
    //   // TODO: Add logic to send the reservationData to your backend API
    //   console.log('Initiating reservation:', reservationData);
    // } else {
    //   // Form is invalid, display validation errors or handle accordingly
    //   console.log('Form is invalid.');
    // }
  }
}
