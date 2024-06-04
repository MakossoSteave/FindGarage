import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { GeolocationService } from './geolocalisation.service';
import { GarageDetailComponent } from './garage-detail/garage-detail.component';


@NgModule({
  declarations: [AppComponent , GarageDetailComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  HttpClientModule ,GoogleMapsModule ],
  providers: [GeolocationService ,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
