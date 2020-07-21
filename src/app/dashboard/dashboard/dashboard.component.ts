import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { LocalStorageService } from '../../services/local-storage.service';

import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  location: any;
  tillDate: any;
  presentDay: any;
  monthAvg: any;
  lastUpdate: string;
  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService,
    private analytics: AngularFireAnalytics
  ) { }

  ngOnInit() {
    this.initLocation();
  }

  initLocation() {
    const locationHistory = this.localStorageService.getLocation();
    if (locationHistory === null) {
      this.location = 'dharwad';
    } else {
      this.location = locationHistory;
    }

    this.getData();
  }

  getData() {
    this.analytics.logEvent('get covid data', this.location);
    this.httpService.getCovidData().subscribe((data: any[]) => {
      const districtData: any = data.filter(elem => elem.district === this.location);
      this.lastUpdate = districtData[0].updatedOn;
      districtData[0].data.forEach(elem => {

        if (elem.id === 'monthlyRecords') {
          this.monthAvg = elem;
        }
        if (elem.id === 'tilDate') {
          this.tillDate = elem;
        }

        if (elem.id === 'presentDay') {
          this.presentDay = elem;
        }
      });
    });
  }

  locationUpdate(event) {
    this.localStorageService.setLocation(event.value);
    this.getData();

  }
}
