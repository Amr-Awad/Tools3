import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { ITrip } from "./trip";
import { ViewTripsService } from "./viewTrips.service";

@Component(
{
    selector: "viewTrips",
    templateUrl: "viewTrips.component.html",
    styleUrls: ["viewTrips.component.css"]
})
export class ViewTripsComponent
{
    errorMessage: any;
    constructor(private viewTripsService:ViewTripsService){}
    trips: ITrip[] = [];
    sub!: Subscription;
    pageTitle: string = "All Trips ";
    ngOnInit(): void{
        this.sub = this.viewTripsService.getTrips().subscribe({
            next: trips => {
                this.trips = trips;
            },
            error: err => this.errorMessage = err
    });
    }



}

