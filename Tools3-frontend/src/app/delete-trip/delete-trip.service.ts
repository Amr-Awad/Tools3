import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITrip } from "../viewTrips/trip";

@Injectable({
    providedIn: "root"
})

export class DeleteTripService {
    constructor(private http: HttpClient) { }
    private _url: string = "http://localhost:8080/admin/deletetrip";

    deleteTrip(id: string): Observable<ITrip> {
        const tripUrl = "" + this._url + "/" + id;
        return this.http.delete<ITrip>(tripUrl);
    }
}