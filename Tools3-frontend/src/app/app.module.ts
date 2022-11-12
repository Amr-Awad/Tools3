import { ViewTripsComponent } from './viewTrips/viewTrips.components';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewStationsComponent } from './view-stations/view-stations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateTripComponent } from './create-trip/create-trip.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewTripsComponent,
    ViewStationsComponent,
    NavbarComponent,
    CreateTripComponent,
    UpdateTripComponent,
    DeleteTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
