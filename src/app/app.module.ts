import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartAssistanceTypesComponent } from './components/chart-assistance-types/chart-assistance-types.component';
import { ChartViolenceSituationsTypesComponent } from './components/chart-violence-situations-types/chart-violence-situations-types.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FormsModule } from '@angular/forms';
import { SpecificChartAssistanceTypesComponent } from './components/specific-chart-assistance-types/specific-chart-assistance-types.component';
import { SpecificChartViolenceSituationTypesComponent } from './components/specific-chart-violence-situation-types/specific-chart-violence-situation-types.component';
import { QuantityChartComponent } from './components/quantity-chart/quantity-chart.component';
import { PieChartViolenceSituationsTypesComponent } from './components/pie-chart-violence-situations-types/pie-chart-violence-situations-types.component';
import { PieChartAssistanceTypesComponent } from './components/pie-chart-assistance-types/pie-chart-assistance-types.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartAssistanceTypesComponent,
    ChartViolenceSituationsTypesComponent,
    HeaderComponent,
    FilterComponent,
    DashboardPageComponent,
    SpecificChartAssistanceTypesComponent,
    SpecificChartViolenceSituationTypesComponent,
    QuantityChartComponent,
    PieChartViolenceSituationsTypesComponent,
    PieChartAssistanceTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
