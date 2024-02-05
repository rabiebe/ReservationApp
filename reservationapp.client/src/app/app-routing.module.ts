import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: "reservation-list", component: ReservationListComponent, canActivate: [AuthGuard] },
  { path: "reservation-form", component: ReservationFormComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
