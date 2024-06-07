import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { garage } from '../garage';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-garage-detail',
  templateUrl: './garage-detail.component.html',
  styleUrls: ['./garage-detail.component.scss'],
})

export class GarageDetailComponent implements OnInit {
  garage: garage | any;
  garageId: any;
  address : string|any;
  postale_code : string | any;
  rating: any ;
  ratingArray:number[] | undefined;


  constructor(private route: ActivatedRoute, private garageService: HomeService, private router: Router) { }

  ngOnInit() {
    this.garageId = this.route.snapshot.paramMap.get('id')
    if (this.garageId) {
      this.garage = this.garageService.getGarageDetails(this.garageId).subscribe(data => {
        this.garage = data;
        console.log(data)
        this.address = this.garage.location.address1 +" "+this.garage.location.city
        this.postale_code = this.garage.location.zip_code
        this.rating = this.garage.rating
        this.ratingArray = Array.from({length: this.rating}, (_, index) => index + 1);
        console.log(this.ratingArray)
      });
    }else{
      console.log('aucune donné trouvé ')
    }
  }

  goHome() {
    this.router.navigate(['tabs/tab1'])
  }
  goPlan() {
    this.router.navigate(['tabs/tab2'])
  }
  title = 'FindGarage'


}
