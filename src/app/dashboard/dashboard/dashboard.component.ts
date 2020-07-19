import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tillDate: any;
  presentDay: any;
  monthAvg: any;

  constructor() { }

  ngOnInit() {
    this.getMonthAvgData();
    this.getTillDateData();
    this.getPresentDayData();
  }

  getMonthAvgData() {
    this.monthAvg = {
      title: "Covid Meter",
      series: [{
        name: 'Positive',
        data: [50, 350, 150, 300],
        color: '#f97c00'
      },
      {
        name: 'Death',
        data: [2, 140, 66, 35],
        color: '#263238'
      },
      {
        name: 'Recoveries',
        data: [25, 50, 100, 250],
        color: '#90ed7d'
      }
      ]
    }
  }
  getTillDateData() {
    this.tillDate = {
      title: "Covid Cases Till Date",
      series: [{
        name: '',
        data: [
          ['Positive', 8],
          ['Death', 3],
          ['Recoveries', 1],
        ]
      }
      ]
    }
  }
  getPresentDayData() {
    this.presentDay = {
      title: "Covid Cases Today",
      series: [{
        name: '',
        data: [
          ['Positive', 8],
          ['Death', 3],
          ['Recoveries', 1],
        ]
      }
      ]
    }
  }
}
