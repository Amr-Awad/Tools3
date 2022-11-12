import { Component, OnInit } from '@angular/core';
import { IStation } from '../view-stations/station';
import { ITrip } from '../viewTrips/trip';
import { UpdateTripService } from './update-trip.service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent {

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

  constructor(private service: UpdateTripService) { }
  update(id: string, from: string, to: string, start: string, end: string) {
    this.from_station.name = from;
    this.to_station.name = to;
    this.trip.fromStation = this.from_station;
    this.trip.toStation = this.to_station;
    this.trip.startTime = start;
    this.trip.endTime = end;
    this.service.updateTrip(id, this.trip).subscribe((Response: any) => { console.log(Response); }
    )
  }

}
