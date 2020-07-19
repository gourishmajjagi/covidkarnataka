import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tillDate: any;
  presentDay: any;
  monthAvg: any;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpService.getCovidData().subscribe((data: any[]) => {
      data.forEach(elem => {

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

}
