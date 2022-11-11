import { ViewStationsComponent } from './view-stations/view-stations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewTripsComponent } from './viewTrips/viewTrips.components';

const routes: Routes = [
  {path:"viewStations",component:ViewStationsComponent},
  {path:"viewTrips",component:ViewTripsComponent},
  {path:"",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
