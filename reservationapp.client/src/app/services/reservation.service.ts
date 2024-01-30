// reservation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`/reservation`)
      .pipe(
        tap((result) => {
          console.log('GetAll', result);
        }),
        catchError((error) => {
          console.error('Error getting reservations:', error);
          throw error; 
        })
      );
  }

  saveReservation(reservationData: any): Observable<any> {
    return this.http.post(`/reservation/initiate`, reservationData);
  }
}
