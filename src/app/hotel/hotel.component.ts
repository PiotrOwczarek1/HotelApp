import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[] = [];
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.populateInMemoryHotels();
  }


  private populateInMemoryHotels(): void {
    this.hotelService.getInMemoryHotels()
      .subscribe(hotels => this.hotels = hotels);
  }

  delete(hotel: Hotel) {
    this.hotels = this.hotels.filter(h => h !== hotel);
    this.hotelService.deleteHotel(hotel.id).subscribe();
  }

  add(name_in: string, address_in: string, city_id_in: string) {
    name_in = name_in.trim();
    address_in = address_in.trim();
    city_id_in = city_id_in.trim();
    if (!name_in || !address_in || !city_id_in) { return; }
    this.hotelService.addHotel( { name:name_in, address:address_in, city_id:parseInt(city_id_in)} as Hotel)
      .subscribe(hotel => {
        this.hotels.push(hotel);
      });
  }
}
