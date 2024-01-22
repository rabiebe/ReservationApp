import { Component, Input } from '@angular/core';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {
  @Input() reservations: Reservation[] = [
    {
      id: 1,
      name: 'John Doe',
      date: '2024-01-20',
      time: '10:00',
      status: 'Confirmed',
      statusBgColor: 'green',
      statusTextColor: 'white',
      image: 'https://via.placeholder.com/150',
      numberOfGuests: 3,
    },
    {
      id: 2,
      name: 'Jane Doe',
      date: '2024-01-21',
      time: '11:00',
      status: 'Pending',
      statusBgColor: 'yellow',
      statusTextColor: 'black',
      image: 'https://via.placeholder.com/150',
      numberOfGuests: 4,
    },
    {
      id: 3,
      name: 'Bob Smith',
      date: '2024-01-22',
      time: '12:00',
      status: 'Cancelled',
      statusBgColor: 'red',
      statusTextColor: 'white',
      image: 'https://via.placeholder.com/150',
      numberOfGuests: 2,
    },
  ];
}