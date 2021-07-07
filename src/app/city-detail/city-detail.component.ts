import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../model/city';
import { Hotel } from '../model/hotel';
import { CityService } from '../services/city.service';
import { Location } from '@angular/common';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  @Input() city?: City;
  hotels: Hotel[] = [];

  constructor(private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location,
    private hotelService: HotelService) { }

  ngOnInit(): void {
    this.populateCity();
    this.populateInMemoryHotelsByCityId();
  }

  private populateCity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cityService.getInMemoryCity(id).subscribe(city => this.city = city);
  }


  private populateInMemoryHotelsByCityId(): void {    
    const city_id = Number(this.route.snapshot.paramMap.get('id'));
    this.hotelService.getInMemoryHotelsByCityId(city_id)
    .subscribe(hotels => this.hotels = hotels);
  }

  delete(hotel : Hotel) {
    this.hotels = this.hotels.filter(h => h!== hotel);
    this.hotelService.deleteHotel(hotel.id).subscribe();
  }

  

  goBack(): void {
    this.location.back();
  }


}
