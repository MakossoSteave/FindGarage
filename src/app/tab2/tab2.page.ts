import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { GeolocationService } from '../geolocalisation.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],

})
export class Tab2Page {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 48.8566, lng: 2.3522 }; // Coordonnées pour Paris
  options: google.maps.MapOptions = {
  mapTypeId: 'roadmap',
  scrollwheel: false};

  constructor(private geolocationService : GeolocationService){}
  ngOnInit() {
    this.geolocationService.getCurrentPosition().then(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    }).catch(error => {
      console.error('Error getting location', error);
    });
  }

}
