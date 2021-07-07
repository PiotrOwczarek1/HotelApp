import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { HotelComponent } from './hotel/hotel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { MysqlHotelComponent } from './mysql-hotel/mysql-hotel.component';

import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';

const oktaConfig = {
  clientId: '0oa151pzktvDweu3Z5d7',
  issuer: 'https://dev-7843081.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/callback'
}


@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    HotelComponent,
    DashboardComponent,
    CityDetailComponent,
    HotelDetailComponent,
    MysqlHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,



    //   po zakomentowaniu zadziałało wywoływanie  Event-ów   ,   a przestało  wyświetlać listę ticketów z InMemoryDataService
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
  //  HttpClientInMemoryWebApiModule.forRoot(
   //   InMemoryDataService, { dataEncapsulation: false }
  //  ),
    OktaAuthModule

  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
