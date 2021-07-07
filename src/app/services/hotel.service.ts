import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Hotel} from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotelsUrl = 'api/hotels';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getInMemoryHotels() : Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.hotelsUrl).pipe(      
      catchError(this.handleError<Hotel[]>('getInMemoryHotels', []))
      );
  }

  getInMemoryHotel(id: number) : Observable<Hotel>{
    const url = `${this.hotelsUrl}/${id}`;
    return this.httpClient.get<Hotel>(url).pipe(
      catchError(this.handleError<Hotel>(`getInMemoryHotel for id= ${id}`))
      );
  }

  getInMemoryHotelsByCityId(city_id: number) : Observable<Hotel[]>{
    const url = `${this.hotelsUrl}/?city_id=${city_id}`;
    return this.httpClient.get<Hotel[]>(url).pipe(
      catchError(this.handleError<Hotel[]>(`getInMemoryHotelsForCityId= ${city_id}`, []))
      );
  }

  deleteHotel(id : number) : Observable<Hotel> {
    const url = `${this.hotelsUrl}/${id}`;
    return this.httpClient.delete<Hotel>(url, this.httpOptions).pipe(
      catchError(this.handleError<Hotel>(`deleteHotel with id = ${id}`))
    );
  }

  addHotel(hotel : Hotel) : Observable<Hotel> {
    return this.httpClient.post<Hotel>(this.hotelsUrl, hotel, this.httpOptions).pipe(
      catchError(this.handleError<Hotel>(`problem with adding new Hotel`))
    );
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
