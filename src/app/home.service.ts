import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = '/api/v3/businesses/search';

  constructor(private http: HttpClient) { }

  getGarages(latitude: number, longitude: number, radius: number = 5000): Observable<any> {
    const auth = "Bearer dMYRTSEFpVvKCWWezsRT8sFrdHSrVOooYSjDw0DiFrYVcSyr8yI5AHL8ZRyNm59FsHE3YbPJ2F7RlzfyO72dSxtE5_AN7Am-_Po4xI6qNTw2U2NYmtvWEcu0NnlbZnYx"
    const headers = new HttpHeaders({
      'Authorization': auth,
      'description' : "gestion des garages de proximité"
    });
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&radius=${radius}&categories=autorepair`;
    return this.http.get<any>(url, { headers });
  }
}
