import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit {
  public reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.getAllReservations();
  }

  getAllReservations() {
    this.reservationService.getAll().subscribe(
      (result) => {
        this.reservations = result
      },
      (error) => {
        console.error('Error fetching reservations:', error);
      }
    );
  }

}
