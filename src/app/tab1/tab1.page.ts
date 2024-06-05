import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { CommonModule } from '@angular/common';
import {garage} from '../garage'
import { SearchbarInputEventDetail } from '@ionic/angular';
import { InputInputEventDetail, IonInputCustomEvent, IonSearchbarCustomEvent } from '@ionic/core';
import { GeolocationService } from '../geolocalisation.service';
import { Router } from '@angular/router';





interface Garagem {
  name: string;
  location: { city: string };
  image_url: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit  {

  public data = [
  'Paris',
  'Nanterre',
  'Ermont'
  ];
  public results = [...this.data];

  /**
   *   handleInput(event:any ) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
   * @param event 
   */

  title = "FindGarage"
  garages!: garage[];
  inputValue:string =''
  center: { lat: number; lng: number; } | any;
  city : string |any;
  garageCity : garage[]|any
  garageCityArray: garage[] = [];
  garageValidate : any;

  constructor(private garageService : HomeService , private geolocationService :GeolocationService , private router :Router) {}
  ngOnInit() {

    this.geolocationService.getCurrentPosition().then(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.garageService.getGarages(this.center.lat, this.center.lng).subscribe(data => {
        this.garages = data.businesses;

        
      });
    }).catch(error => {
      console.error('Error getting location', error);
    });   
  
  }
  searchCity($event: IonInputCustomEvent<InputInputEventDetail>) {
    this.city = $event.detail.value;
    this.garageService.getGaraPoximite(this.city).subscribe(data=>{
      this.garageCity = data
      this.garageCityArray = Object.values(this.garageCity);
      this.garageValidate = this.garageCityArray[0]

    })

  }

  goDetail(idGarage:garage){
    console.log(idGarage.alias);

    this.router.navigate(["garageDetail/"+idGarage.id])
  }



  
}
