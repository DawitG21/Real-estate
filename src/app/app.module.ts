import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng5SliderModule } from 'ng5-slider';
import { HttpClientModule , HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UploadComponent } from 'src/pages/upload/upload-page';
import { HouseDetailPageComponent } from 'src/pages/house-detail/house-detail';
import { HomepageComponent } from 'src/pages/homepage/homepage.component';
import { HomesComponent } from 'src/pages/homes/homes.component';
import { HomesheaderComponent } from 'src/pages/homesheader/homesheader.component';
import { NavheaderComponent } from 'src/pages/navheader/navheader.component';

import { CategoryFilterPipe } from 'src/pipes/categorypipe';
import { LocationFilterPipe } from 'src/pipes/locationpipe';
import { BathroomFilterPipe } from 'src/pipes/bathroompipe';
import { BedroomFilterPipe } from 'src/pipes/bedroompipe';
import { ParkingFilterPipe } from 'src/pipes/parkingpipe';
import { ParkingSpotFilterPipe } from 'src/pipes/parkingspots';
import { AmenitiesFilterPipe } from 'src/pipes/otheramenities';
import { PricerangeFilterPipe } from 'src/pipes/pricerangepipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HomeService } from 'src/providers/home.service';
import { UploadService } from 'src/service/upload.service';
import { UploadApiService } from 'src/service/uploadApi.service';
import { UserApiService } from 'src/service/userApi.service'; 
import { HttpModule } from '@angular/http';
import { LoginComponent } from 'src/pages/loginform/login-page';
import { ToastrModule } from 'ngx-toastr';
import { LoginService } from 'src/service/loginApi.service';
import { EnquiriesService } from 'src/service/enquiriesApi.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail', component: HouseDetailPageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'list', component: HomesComponent },
  { path: 'login', component: LoginComponent},
  { path: 'properties', component: UploadComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HouseDetailPageComponent,
    HomepageComponent,
    HomesComponent,
    HomesheaderComponent,
    NavheaderComponent,
    LoginComponent,
    CategoryFilterPipe,
    LocationFilterPipe,
    BathroomFilterPipe,
    BedroomFilterPipe,
    ParkingFilterPipe,
    ParkingSpotFilterPipe,
    AmenitiesFilterPipe,
    PricerangeFilterPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    Ng5SliderModule,
    HttpClientModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UploadService, HomeService ,HttpClientModule , UploadApiService ,UserApiService ,LoginService ,EnquiriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
