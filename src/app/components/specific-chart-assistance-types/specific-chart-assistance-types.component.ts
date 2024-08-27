import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AssistanceTypes } from 'src/app/models/assistance-types';

@Component({
  selector: 'app-specific-chart-assistance-types',
  templateUrl: './specific-chart-assistance-types.component.html',
  styleUrls: ['./specific-chart-assistance-types.component.css']
})
export class SpecificChartAssistanceTypesComponent implements OnChanges {

  chart: any;

  @Input()
  assistanceTypes: AssistanceTypes[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['assistanceTypes']) {
      this.createChart();
    }
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destruir o gráfico anterior, se existir, para evitar sobreposição
    }

    const labels = this.assistanceTypes.map(item => item.unidade.nome);

    const qtdAtendimentoSocial = this.assistanceTypes.map(item => item.qtdAtendimentoSocial);
    const qtdAtendimentoRecepcao = this.assistanceTypes.map(item => item.qtdAtendimentoRecepcao);
    const qtdAtendimentoCadastramentoCadUnico = this.assistanceTypes.map(item => item.qtdAtendimentoCadastramentoCadUnico);
  
    this.chart = new Chart("SpecificChartAssistanceTypes", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labels,
	      datasets: [
          {
            label: "Atendimento Social",
            data: qtdAtendimentoSocial,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(144, 238, 144, 0.75)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(144, 238, 144, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          },
          {
            label: "Atendimento Recepção",
            data: qtdAtendimentoRecepcao,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(255, 206, 86, 0.75)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          },
          {
            label: "Atendimento CadÚnico",
            data: qtdAtendimentoCadastramentoCadUnico,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(104, 149, 197, 0.75)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(104, 149, 197, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          }
        ]
      },
      options: {
        aspectRatio: 4,
        responsive: true,
        maintainAspectRatio: false, // Desabilitar para ajustar a altura
        layout: {
          padding: {
            left: 20, // Ajustar o preenchimento à esquerda
            right: 20, // Ajustar o preenchimento à direita7
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'center',
            labels: {
              font: {
                size: 20, // Tamanho da fonte
                family: "'Roboto', sans-serif", // Família da fonte
              },
              boxWidth: 20,
              boxPadding: 20
            }
          },
          title: {
            display: true,
            text: 'Atendimentos',
            font: {
              size: 22, // Tamanho da fonte
              family: "'Roboto', sans-serif", // Família da fonte
              weight: 'bold', // Peso da fonte (negrito)
            },
            color: '#333333', // Cor do texto
            align: 'start',
            padding: {
              top: 0,
              bottom: 10
            }
          },
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: 18, // Aumenta o tamanho da fonte das categorias do eixo x
                family: "'Roboto', sans-serif",
              },
            },
          },
        }
      },
    });
  }
}
