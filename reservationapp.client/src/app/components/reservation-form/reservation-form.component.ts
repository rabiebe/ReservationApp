import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent  {

  constructor(private reservationService: ReservationService, private datePipe: DatePipe) {}

  
  applyForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    numberOfGuests: new FormControl('')
  })

  formatDate(date: string | null | undefined): string {
    return date ? this.datePipe.transform(date, 'yyyy-MM-dd') || '' : ''; 
  }

  initiateReservation() {
    /**
     * "id": 0,
      "name": "string",
      "date": "2024-01-30T17:46:32.604Z",
      "time": 0,
      "status": "string",
      "statusBgColor": "string",
      "statusTextColor": "string",
      "image": "string",
      "numberOfGuests": 0



      {
    "name": "test test2",
    "date": "2024-01-24T00:00:00.000+0100",
    "time": "18:46",
    "numberOfGuests": 4
}
     */
    console.log('xxreservationForm', this.applyForm);

    if (this.applyForm.valid) {
      const reservationData = {
        ...this.applyForm.value,
        status: 'Pending',
        statusBgColor: 'orange',
        statusTextColor: 'white',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        date: this.formatDate(this.applyForm.value.date),
      };
      
      this.reservationService.saveReservation(reservationData)
        .subscribe(
          (response) => {
            console.log('Reservation saved successfully:', response);
            this.reservationService.getAll(); 
          },
          (error) => {
            console.error('Error saving reservation:', error);
          }
        );
    } else {
      console.log('Form is invalid.');
    }
  }
}
