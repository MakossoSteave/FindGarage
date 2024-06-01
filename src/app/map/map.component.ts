import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
export class MapComponent {

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 48.8566, lng: 2.3522 }; // Coordonnées pour Paris
  options: google.maps.MapOptions = {
  mapTypeId: 'roadmap',
  scrollwheel: false}

}
