import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoomInfo} from "../model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) {
  }

  getLatest(): Observable<RoomInfo[]> {
    return this.http.get("https://enigmatic-castle-36157.herokuapp.com/history?from=0&to=9999999999999").pipe(
      map(data => {
        let array: RoomInfo[] = [];
        let keys: string[] = Object.keys(data);

        for (const key of keys) {
          array.push(
            {
              roomId: key.trim(),
              data: data[key]
            }
          );
        }
        return array;
      })
    )
  }

}
