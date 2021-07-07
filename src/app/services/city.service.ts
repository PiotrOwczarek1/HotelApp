import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { City } from '../model/city';
import { CityDetailComponent } from '../city-detail/city-detail.component';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citiesUrl = 'api/cities';

  c: City = {
    id: 1,
    name: 'Windstorm'
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }


  getInMemoryCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.citiesUrl).pipe(
      catchError(this.handleError<City[]>('getInMemoryCities', []))
    );
  }

  getInMemoryCity(id: number): Observable<City> {
    const url = `${this.citiesUrl}/${id}`;

    return this.httpClient.get<City>(url).pipe(catchError(this.handleError<any>('getInMemoryCity')));
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
