import { IStation } from './station';
import { ViewStationsService } from './view-staion.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-view-stations',
    templateUrl: './view-stations.component.html',
    styleUrls: ['./view-stations.component.css'],
})
export class ViewStationsComponent {
    errorMessage: any;
    constructor(private viewStationsService: ViewStationsService) { }
    stations: IStation[] = [];
    sub!: Subscription;
    pageTitle: string = 'All Stations';
    ngOnInit(): void {
        this.sub = this.viewStationsService.getTrips().subscribe({
            next: (stations) => {
                this.stations = stations;
            },
            error: (err) => (this.errorMessage = err),
        });
    }
}
