import { ViewStationsComponent } from './view-stations/view-stations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewTripsComponent } from './viewTrips/viewTrips.components';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateTripComponent } from './create-trip/create-trip.component';

const routes: Routes = [
  {path:"viewStations",component:ViewStationsComponent},
  {path:"viewTrips",component:ViewTripsComponent},
  {path:"",component:CreateTripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
