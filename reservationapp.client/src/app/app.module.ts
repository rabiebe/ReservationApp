import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { HomeComponent } from './components/home/home.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { DatePipe } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,NavigationComponent, ReservationListComponent, HomeComponent, ReservationComponent, ReservationFormComponent, ConfirmationModalComponent, RegistrationComponent, LoginComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [DatePipe,BsModalService],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
