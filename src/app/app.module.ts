import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { ChartDonutComponent } from './shared/chart-donut/chart-donut.component';
import { ChartLineComponent } from './shared/chart-line/chart-line.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartDonutComponent,
    ChartLineComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
