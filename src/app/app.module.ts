import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartTypesServiceComponent } from './components/chart-types-service/chart-types-service.component';
import { ChartTypesViolenceSituationsComponent } from './components/chart-types-violence-situations/chart-types-violence-situations.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartTypesServiceComponent,
    ChartTypesViolenceSituationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
