import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart-assistance-types',
  templateUrl: './pie-chart-assistance-types.component.html',
  styleUrls: ['./pie-chart-assistance-types.component.css']
})
export class PieChartAssistanceTypesComponent {

  totalSocial: number = 17.0;
  totalRecepcao: number = 24.0;
  totalsCadUnico: number = 21.0;

  chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destroy the previous chart, if it exists, to avoid overlap
    }
  
    const labels = ['Atendimento Social', 'Atendimento Recepção', 'Atendimento CadUnico'];
  
    this.chart = new Chart("PieChartAssistanceTypes", {
      type: 'pie', // Specifies the type of chart
  
      data: {
        labels: labels,
        datasets: [
          {
            data: [this.totalSocial, this.totalRecepcao, this.totalsCadUnico],
            backgroundColor: ['#90EE90', '#FFCE56', '#6895C5'],
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
