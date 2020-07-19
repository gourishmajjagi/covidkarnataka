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
      },
    },
    title: {
      text: 'Total Cases Today'
    },
    subtitle: {
      text: 'Source: Hubballi Dharwad Muncipal Corporation'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        innerSize: 80,
        colors: ['#f97c00', '#263238', '#90ed7d'],
        dataLabels: {
          enabled: true,
          format: '<b>{point.y}',
          distance: -50,
          style: {
            color: '#fff',
            textShadow: false,
            textOutline: false
          }
        },
        showInLegend: true
      }
    },
    series: []
  }

  constructor() { }

  ngOnInit() {
    this.chartOptions.series = [{
      name: '',
      data: []
    }];
    this.loadBidChartData()
    // setInterval(() => this.loadBidChartData(), 1000);
  }

  loadBidChartData(): void {

    this.chartOptions.series = [{
      name: '',
      data: [
        ['Positive', 8],
        ['Death', 3],
        ['Recoveries', 1],
      ]
    }
    ];
    this.updateFlag = true;
  }

}
