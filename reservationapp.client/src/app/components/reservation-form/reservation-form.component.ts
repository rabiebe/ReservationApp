import { Component } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { DatePipe } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent  {
  modalRef: BsModalRef | undefined; 

  constructor(private reservationService: ReservationService, private datePipe: DatePipe, private modalService: BsModalService) {}

  
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
            this.showConfirmationModal(reservationData);
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

  showConfirmationModal(reservationData: any): void {
    this.modalRef = this.modalService.show(ConfirmationModalComponent, { initialState: { data: reservationData } });
  }
}
