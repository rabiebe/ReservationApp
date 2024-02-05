
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login (user: any): Observable<any> {
    return this.http.post(`/user/login`, user );
  }

  register(user: any): Observable<any> {
    return this.http.post(`/user/register`, user );
  }
  
}
