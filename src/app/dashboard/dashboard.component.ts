import { Component, OnInit } from '@angular/core';
import {City} from '../model/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cities : City[] = [];

  constructor(private cityService : CityService) { }

  ngOnInit(): void {
    this.populateInMemoryCities();
  }

  private populateInMemoryCities() :void {
    this.cityService.getInMemoryCities()
    .subscribe(cities => this.cities = cities);
  }

}
