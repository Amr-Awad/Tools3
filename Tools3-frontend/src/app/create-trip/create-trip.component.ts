import { Component } from '@angular/core';
import { ITrip } from '../viewTrips/trip';
import { IStation } from '../view-stations/station';
import { CreateTripService } from './create-trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent {
  trip: ITrip = {
    id: 0,
    fromStation: { id: 0, name: "" },
    toStation: { id: 0, name: "" },
    startTime: "",
    endTime: ""
  };
  from_station: IStation = {
    id: 0, name: ""
  };
  to_station: IStation = {
    id: 0, name: ""
  };
  tripCreated: boolean = false;

  constructor(private service: CreateTripService) { }
  create(from: string, to: string, start: string, end: string) {
    this.from_station.name = from;
    this.to_station.name = to;
    this.trip.fromStation = this.from_station;
    this.trip.toStation = this.to_station;
    this.trip.startTime = start;
    this.trip.endTime = end;
    this.service.createTrip(this.trip).subscribe((Response: any) => { console.log(Response); 
    this.tripCreated = true;
    setTimeout(() => {  this.tripCreated = false; }, 3000);    }
    )
  }
}
