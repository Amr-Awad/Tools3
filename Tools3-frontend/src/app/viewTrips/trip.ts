import { IStation } from "../view-stations/station";
export interface ITrip {
    id: number;
    fromStation: IStation;
    toStation: IStation;
    startTime: String;
    endTime: String;
}