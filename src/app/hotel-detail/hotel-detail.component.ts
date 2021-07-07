import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { HotelService } from '../services/hotel.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  @Input() hotel?: Hotel;

  
  constructor(private route: ActivatedRoute,    
    private location: Location,
    private hotelService: HotelService) { }


  ngOnInit(): void {
    this.populateHotel();
  }

  private populateHotel() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hotelService.getInMemoryHotel(id).subscribe(hotel => this.hotel= hotel);
  }

  goBack(): void {
    this.location.back();
  }
  
}
