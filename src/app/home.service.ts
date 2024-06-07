import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = '/api/v3/businesses/search';
  private apiDetail = '/api/v3/businesses/'
  private auth = "Bearer dMYRTSEFpVvKCWWezsRT8sFrdHSrVOooYSjDw0DiFrYVcSyr8yI5AHL8ZRyNm59FsHE3YbPJ2F7RlzfyO72dSxtE5_AN7Am-_Po4xI6qNTw2U2NYmtvWEcu0NnlbZnYx"



  constructor(private http: HttpClient) { }

  getGarages(latitude: number, longitude: number, radius: number = 15000): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': this.auth,
      'description' : "gestion des garages de proximité",
      'accept': 'application/json'
    }); 
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&radius=${radius}&categories=autorepair&limite=100`;
    console.log(url)
    return this.http.get<any>(url, {headers});
  }
  getGarageDetails (idGarage : string) {
    const headers = new HttpHeaders({
      'Authorization': this.auth,
      'description' : "gestion des garages de proximité",
      'accept': 'application/json'
    });
    const url = `${this.apiDetail}${idGarage}`;
    return this.http.get<any>(url, {headers});
  }
  getGaraPoximite(idCity:string){
    const headers = new HttpHeaders({
      'Authorization': this.auth,
      'description' : "gestion des garages de proximité",
      'accept': 'application/json'
    });
    const url = `${this.apiDetail}search?location=${idCity}&categories=autorepair&sort_by=best_match&limite=100`;
    return this.http.get<any>(url, {headers});
  }
}
