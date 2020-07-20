import { Component, OnInit, Input } from '@angular/core';

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
      height: 300,
      style: {
        fontFamily: ' Roboto, "Helvetica Neue", sans-serif;'
      },
    },
    title: {
      text: 'Total Cases Today'
    },
    subtitle: {
      text: 'Source: Covid-19 Information Portal karnataka'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {

        innerSize: 100,
        dataLabels: {
          enabled: true,
          format: '<b>{point.y}',
          distance: 10,
          style: {
            color: '#000',
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

  @Input("chartData")
  set setData(data: string) {
    this.loadBidChartData(data)
  }

  ngOnInit() {
    // this.chartOptions.series = [{
    //   name: '',
    //   data: []
    // }];
    // this.loadBidChartData()
    // setInterval(() => this.loadBidChartData(), 1000);
  }

  loadBidChartData(data): void {
    this.chartOptions.title.text = data.title;
    this.chartOptions.series = data.series;
    this.updateFlag = true;
  }

}
