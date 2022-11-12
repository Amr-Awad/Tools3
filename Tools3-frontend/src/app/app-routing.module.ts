import { ViewStationsComponent } from './view-stations/view-stations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewTripsComponent } from './viewTrips/viewTrips.components';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';

const routes: Routes = [
  { path: "viewStations", component: ViewStationsComponent },
  { path: "viewTrips", component: ViewTripsComponent },
  { path: "createTrip", component: CreateTripComponent },
  { path: "updateTrip", component: UpdateTripComponent },
  { path: "deleteTrip", component: DeleteTripComponent },
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
