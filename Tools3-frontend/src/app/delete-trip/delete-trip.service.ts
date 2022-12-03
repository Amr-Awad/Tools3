import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ITrip } from "../viewTrips/trip";

@Injectable({
    providedIn: "root"
})

export class DeleteTripService {
    constructor(private http: HttpClient) { }
    private _url: string = "http://localhost:"+environment.backendport+"/admin/deletetrip";

    deleteTrip(id: string): Observable<ITrip> {
        const tripUrl = "" + this._url + "/" + id;
        return this.http.delete<ITrip>(tripUrl);
    }
}