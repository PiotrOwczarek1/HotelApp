import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityComponent } from './city/city.component';
import { HotelComponent } from './hotel/hotel.component';
import { MysqlHotelComponent } from './mysql-hotel/mysql-hotel.component';

import { CityDetailComponent } from './city-detail/city-detail.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';

import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';


const routes: Routes = [
  { path : 'city-detail/:id', component: CityDetailComponent},
  { path: 'cities', component: CityComponent },
  { path : 'hotel-detail/:id', component: HotelDetailComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hotels', component: HotelComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: 'mysql-hotels',
    component: MysqlHotelComponent,
    canActivate: [OktaAuthGuard]
  },
  { path: 'callback', component: OktaCallbackComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
