import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ITrip } from "../viewTrips/trip";

@Injectable({
    providedIn: "root"
})

export class CreateTripService {
    constructor(private http: HttpClient) { }
    private _url: string = "http://localhost:/admin/createtrip";

    createTrip(trip: ITrip): Observable<ITrip> {
        return this.http.post<ITrip>(this._url, trip);
    }
}
