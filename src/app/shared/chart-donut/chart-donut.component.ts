import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-donut',
  templateUrl: './chart-donut.component.html',
  styleUrls: ['./chart-donut.component.css']
})
export class ChartDonutComponent implements OnInit {

  Highcharts = Highcharts;

  updateFlag: boolean;

  chartOptions = {
    chart: {
      type: 'pie',
      style: {
        fontFamily: 'Roboto, "Helvetica Neue", sans-serif;'
      }
    },
    title: {
      text: 'Total Cases Today'
    },
    subtitle: {
      text: 'Source: Hubballi Dharwad Muncipal Corporation'
    },
    plotOptions: {
      pie: {
        innerSize: 50,
        depth: 45,
        colors: ['#f97c00', '#263238', '#90ed7d'],
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Delivered amount',
      data: [
        ['Positive', 8],
        ['Death', 3],
        ['Recoveries', 1],
      ]
    }]
  }

  constructor() { }

  ngOnInit() {
  }

}
