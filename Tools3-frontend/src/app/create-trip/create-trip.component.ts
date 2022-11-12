import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITrip } from '../viewTrips/trip';
import { IStation } from '../view-stations/station';
import { CreateTripService } from './create-trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent{
  sub!: Subscription;
  trip: ITrip = {
    fromStation: {name: ""},
    toStation: {name: ""},
    startTime: "",
    endTime: ""
  };
  from_station: IStation = {
    name: ''
  };
  to_station: IStation = {
    name: ''
  };

  constructor(private service: CreateTripService){}
  create(from: string,to: string,start: string,end: string){
    this.from_station.name = from;
    this.to_station.name = to;
    this.trip.fromStation = this.from_station;
    this.trip.toStation = this.to_station;
    this.trip.startTime = start;
    this.trip.endTime = end;
    this.service.createTrip(this.trip).subscribe((Response:any)=>
    {console.log(Response);}
    )
  }

}
