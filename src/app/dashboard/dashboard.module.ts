import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartDonutComponent } from '../shared/chart-donut/chart-donut.component';
import { ChartLineComponent } from '../shared/chart-line/chart-line.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ChartDonutComponent,
    ChartLineComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    HighchartsChartModule
  ]
})
export class DashboardModule { }
