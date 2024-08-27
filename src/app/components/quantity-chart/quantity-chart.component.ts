import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-chart',
  templateUrl: './quantity-chart.component.html',
  styleUrls: ['./quantity-chart.component.css']
})
export class QuantityChartComponent {

  @Input()
  unitName: string = "";

  @Input()
  total: number = 0.0;

  @Input()
  description: string = "";
}
