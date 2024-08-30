import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AssistanceTypes } from 'src/app/models/assistance-types';

@Component({
  selector: 'app-pie-chart-assistance-types',
  templateUrl: './pie-chart-assistance-types.component.html',
  styleUrls: ['./pie-chart-assistance-types.component.css']
})
export class PieChartAssistanceTypesComponent {

  @Input()
  assistanceTypes: AssistanceTypes[] = [];

  totalSocial: number = 0.0;
  totalRecepcao: number = 0.0;
  totalCadastroCadUnico: number = 0.0;
  totalAtualizacaoCadUnico: number = 0.0;
  totalVisitaDomiciliar: number = 0.0;

  chart: any;

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['assistanceTypes']) {
      this.sumTotalAssistanceTypes();
      this.createChart();
    }
  }

  sumTotalAssistanceTypes() {
    this.totalSocial = this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoSocial, 0);
    this.totalRecepcao = this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoRecepcao, 0);
    this.totalCadastroCadUnico = this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoCadastramentoCadUnico, 0);
    this.totalAtualizacaoCadUnico = this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoAtualizacaoCadUnico, 0);
    this.totalVisitaDomiciliar = this.assistanceTypes.reduce((sum, item) => sum + item.qtdVisitaDomiciliar, 0);
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destroy the previous chart, if it exists, to avoid overlap
    }
  
    const labels = ['Atendimento Social', 'Atendimento Recepção', 'Cadastro CadUnico', 'Atualização CadUnico', 'Visita Domiciliar'];
  
    this.chart = new Chart("PieChartAssistanceTypes", {
      type: 'pie', // Specifies the type of chart
  
      data: {
        labels: labels,
        datasets: [
          {
            data: [this.totalSocial, this.totalRecepcao, this.totalCadastroCadUnico, this.totalAtualizacaoCadUnico, this.totalVisitaDomiciliar],
            backgroundColor: ['#90EE90', '#FFCE56', '#6895C5', '#A52A2ABF', '#A52A2A'],
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
