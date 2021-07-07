import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../model/hotel';
import { MysqlDataService } from '../mysql-services/mysql-data.service';
import { HotelService } from '../services/hotel.service';


@Component({
  selector: 'app-mysql-hotel',
  templateUrl: './mysql-hotel.component.html',
  styleUrls: ['./mysql-hotel.component.css']
})
export class MysqlHotelComponent implements OnInit {

  mysql_hotels : Hotel[] = [];

  constructor(private mysqlDataService: MysqlDataService, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.getMysqlHotels();
  }

  
  private getMysqlHotels() {
    this.mysqlDataService.getHotels().then((response: any) => {
      console.log('Response', response);
      this.mysql_hotels = response.map((hotel : any) => hotel);
    });
  }



  delete(hotel: Hotel) {
    this.mysql_hotels = this.mysql_hotels.filter(h => h !== hotel);
    this.mysqlDataService.deleteHotel(hotel.id);
  }



  add(name_in: string, address_in: string, city_id_in: string) {
    name_in = name_in.trim();
    address_in = address_in.trim();
    city_id_in = city_id_in.trim();
    if (!name_in || !address_in || !city_id_in) {
       return; 
    }

    const hotel_to_add: Hotel = { name: name_in, address: address_in, city_id: parseInt(city_id_in) } as Hotel;
    console.log("hotel name = ", hotel_to_add.name);

    //this.mysqlDataService.addHotel(hotel_to_add);
    this.mysqlDataService.addHotel(hotel_to_add).then(() => this.getMysqlHotels())

    this.mysql_hotels.push(hotel_to_add);


  }




}
