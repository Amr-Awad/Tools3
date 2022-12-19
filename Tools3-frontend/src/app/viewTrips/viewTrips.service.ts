import { ITrip } from './trip';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable(
    {
        providedIn: "root"
    })
export class ViewTripsService {
    constructor(private http: HttpClient) { }
    private _url: string = "http://localhost:/admin/getalltrips";

    getTrips(): Observable<ITrip[]> {
        return this.http.get<ITrip[]>(this._url).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    handleError(err: any) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
    }

}