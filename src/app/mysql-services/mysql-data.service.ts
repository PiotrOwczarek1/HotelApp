import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from '../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Hotel} from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class MysqlDataService {

  constructor(private http: HttpClient, public oktaAuth: OktaAuthService) {
  }

  private async request(method: string, url: string, data?: any) {
    const token = await this.oktaAuth.getAccessToken();

    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getHotels() {
    return this.request('GET', `${environment.serverUrl}/hotel`);
  }

  getMySqlHotels() : Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${environment.serverUrl}/hotel`).pipe(      
      catchError(this.handleError<Hotel[]>('getMySqlHotels', []))
      );
  }
  

  addHotel(hotel : Hotel) {
    console.log("hotel name = ", hotel.name);
    return this.request('POST', `${environment.serverUrl}/hotel`, hotel);
  }
/*
  updateHotel(hotel) {
    return this.request('PUT', `${environment.serverUrl}/hotel/${hotel.id}`, hotel);
  }
*/
  deleteHotel(id : number) {
    return this.request('DELETE', `${environment.serverUrl}/hotel/${id}`);
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}