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
      style: {
        fontFamily: ' Roboto, "Helvetica Neue", sans-serif;'
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

  @Input("chartData")
  set setData(data: string) {
    console.log(data);
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
