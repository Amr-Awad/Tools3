import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ITrip } from "../viewTrips/trip";

@Injectable({
    providedIn: "root"
})

export class UpdateTripService {
    constructor(private http: HttpClient) { }
    private _url: string = "https://backend-tools.apps.eu410.prod.nextcle.com/admin/updatetrip";

    updateTrip(id: string, trip: ITrip): Observable<ITrip> {
        const tripUrl = "" + this._url + "/" + id;
        return this.http.put<ITrip>(tripUrl, trip);
    }
}