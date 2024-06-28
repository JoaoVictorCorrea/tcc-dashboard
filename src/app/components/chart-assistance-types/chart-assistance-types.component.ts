import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AssistanceTypes } from 'src/app/models/assistance-types';
import { AssistanceTypesService } from 'src/app/services/assistance-types.service';

@Component({
  selector: 'app-chart-assistance-types',
  templateUrl: './chart-assistance-types.component.html',
  styleUrls: ['./chart-assistance-types.component.css']
})
export class ChartAssistanceTypesComponent implements OnInit {

  chart: any;
  assistanceTypes: AssistanceTypes[] = [];

  constructor(private assistanceTypesService: AssistanceTypesService) { }
  
  ngOnInit(): void {
    this.loadChartAssistanceTypes();
  }

  loadChartAssistanceTypes() {
    this.assistanceTypesService.getAssistanceTypes().subscribe({
      next: data => {
        this.assistanceTypes = data;
        this.createChart();
       }
    });
  }

  createChart() {
    const labels = this.assistanceTypes.map(item => item.unidade.nome);

    const qtdAtendimentoSocial = this.assistanceTypes.map(item => item.qtdAtendimentoSocial);
    const qtdAtendimentoRecepcao = this.assistanceTypes.map(item => item.qtdAtendimentoRecepcao);
  
    this.chart = new Chart("ChartAssistanceTypes", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labels,
	      datasets: [
          {
            label: "Quantidade de Atendimento Recepção",
            data: qtdAtendimentoRecepcao,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(255, 206, 86, 0.5)', // Terceira cor do gradiente (no caso, amarelo)
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          },
          {
            label: "Quantidade de Atendimento Social",
            data: qtdAtendimentoSocial,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(0, 128, 0, 0.5)', // Terceira cor do gradiente (no caso, amarelo)
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(0, 128, 0, 0.5)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          }
        ]
      },
      options: {
        aspectRatio: 4,
        responsive: true,
        layout: {
          padding: {
            left: 20, // Ajustar o preenchimento à esquerda
            right: 20, // Ajustar o preenchimento à direita
          }
        }
      },
    });
  }
}
