import { Component } from '@angular/core';
import { DeleteTripService } from './delete-trip.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent {
  constructor(private service: DeleteTripService) { }
  delete(id: string) {
    this.service.deleteTrip(id).subscribe((Response: any) => { console.log(Response); }
    )
  }
}
