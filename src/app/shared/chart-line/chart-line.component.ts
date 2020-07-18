import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements OnInit {

  Highcharts = Highcharts;

  updateFlag: boolean;

  chartOptions = {
    chart: {
      type: 'line',
      style: {
        fontFamily: 'Roboto, "Helvetica Neue", sans-serif;'
      }
    },
    title: {
      text: 'Monthly Average Covid-19 Cases'
    },
    subtitle: {
      text: 'Source: Hubballi Dharwad Muncipal Corporation'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
        text: 'Number of cases'
      },
      labels: {
        // formatter: function () {
        //   return this.value + '°';
        // }
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
      // spline: {
      //   marker: {
      //     radius: 4,
      //     lineColor: '#666666',
      //     lineWidth: 1
      //   }
      // }
    },
    series: []
  };
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
    ];
    this.updateFlag = true;
  }
}
