// auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { UserService } from './user.service'; // Import your UserService

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;

  constructor(private userService: UserService) {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(this.checkAuthenticationStatus());
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }

  private checkAuthenticationStatus(): boolean {

    const token = localStorage.getItem('authToken');
    return !!token; 
  }

  public get isAuthenticatedValue(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  login(credentials: any): Observable<any> {
    return this.userService.login(credentials).pipe(
      tap(response => {
        const authToken = response.token; 
        localStorage.setItem('authToken', authToken);
        this.isAuthenticatedSubject.next(true);
      }),
      catchError(error => {
        console.error('Login failed:', error);
        throw error;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    
    this.isAuthenticatedSubject.next(false);
  }
}
