import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getCovidData() {
    return this.http.get('https://csspw0jhoj.execute-api.ap-south-1.amazonaws.com/development/covid-data');
  }
}
