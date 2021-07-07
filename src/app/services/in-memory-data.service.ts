import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { Hotel } from '../model/hotel';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    let cities = [
      { id: 1, name: 'Berlin' },
      { id: 2, name: 'Stuttgart' },
      { id: 3, name: 'Frankfurt' },
      { id: 4, name: 'Paris' },
      { id: 5, name: 'Rome' },
      { id: 6, name: 'New York' },
      { id: 7, name: 'Tokio' },
      { id: 8, name: 'Los Angeles' }
    ];
    let hotels = [
      { id: 1, name: 'Hotel Oderberger Berlin', address: 'Oderberger Str. 57', city_id: 1 },
      { id: 2, name: 'Hotel Hilton Berlin', address: 'Heidelberger Str. 2', city_id: 1 },
      { id: 3, name: 'Hotel Bristol Berlin', address: 'Kleine Str. 2' , city_id: 1},
      { id: 4, name: 'Hotel Mercedes Stuttgart', address: 'Wiener Str. 2', city_id: 2 },
      { id: 5, name: 'Hotel Hilton Stuttgart', address: 'Berliner Str. 1', city_id: 2 },
      { id: 6, name: 'Hotel Cult Frankfurt', address: 'Berliner Str. 123', city_id: 3 },
      { id: 7, name: 'Hotel Weiss Frankfurt', address: 'Amelia-Mary-Earhart-Str.10', city_id: 3 },
      { id: 8, name: 'Hotel Holiday Inn Frankfurt', address: 'Berliner Str. 1' , city_id: 3},
    ];
    return {hotels, cities};
  }


  genId<T extends City | Hotel>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }

}
