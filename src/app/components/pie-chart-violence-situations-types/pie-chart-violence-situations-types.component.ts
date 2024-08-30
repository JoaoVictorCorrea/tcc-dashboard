import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart-violence-situations-types',
  templateUrl: './pie-chart-violence-situations-types.component.html',
  styleUrls: ['./pie-chart-violence-situations-types.component.css']
})
export class PieChartViolenceSituationsTypesComponent {

  totalOpenViolenceSituations: number = 17.0;
  totalClosedViolenceSituations: number = 31.0;

  chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destroy the previous chart, if it exists, to avoid overlap
    }
  
    const labels = ['Abertas', 'Encerradas'];
  
    this.chart = new Chart("PieChartViolenceSituationsTypes", {
      type: 'pie', // Specifies the type of chart
  
      data: {
        labels: labels,
        datasets: [
          {
            data: [this.totalOpenViolenceSituations, this.totalClosedViolenceSituations],
            backgroundColor: ['#FF3333', '#33FF33'],
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              font: {
                size: 18 // Increase the font size for the legend labels
              }
            }
          },
          tooltip: {
            bodyFont: {
              size: 18 // Increase the font size for the tooltip
            },
            titleFont: {
              size: 18 // Increase the font size for the tooltip title
            }
          }
        }
      }
    });
}
  
}
