import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  prodUrl = 'https://csspw0jhoj.execute-api.ap-south-1.amazonaws.com/prod/covid-data-prod';
  devUrl = 'https://csspw0jhoj.execute-api.ap-south-1.amazonaws.com/development/covid-data';
  constructor(
    private http: HttpClient
  ) { }

  getCovidData() {
    return this.http.get(`${this.prodUrl}`);
  }
}
