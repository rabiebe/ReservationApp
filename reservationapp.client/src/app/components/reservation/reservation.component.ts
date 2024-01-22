import { Component, Input } from '@angular/core';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  @Input() reservation!: Reservation;
}
