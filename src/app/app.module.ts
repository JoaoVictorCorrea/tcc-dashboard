import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartAssistanceTypesComponent } from './components/chart-assistance-types/chart-assistance-types.component';
import { ChartViolenceSituationsTypesComponent } from './components/chart-types-violence-situations/chart-violence-situations-types.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartAssistanceTypesComponent,
    ChartViolenceSituationsTypesComponent
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
