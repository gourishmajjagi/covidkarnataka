import { Component, OnInit, Input } from '@angular/core';

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
      text: 'Source: Covid-19 Information Portal karnataka'
    },
    xAxis: {
      categories: ['Mar', 'Apr', 'May', 'Jun',
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
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
    },
    series: []
  };
  constructor() { }

  ngOnInit() {
  }


  @Input("chartData")
  set setData(data: string) {
    this.loadBidChartData(data);
  }

  loadBidChartData(data): void {
    this.chartOptions.title.text = data.title;
    this.chartOptions.series = [...data.series];
    this.updateFlag = true;
  }
}
