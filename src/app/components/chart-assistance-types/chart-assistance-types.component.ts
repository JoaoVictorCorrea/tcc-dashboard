import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AssistanceTypes } from 'src/app/models/assistance-types';

@Component({
  selector: 'app-chart-assistance-types',
  templateUrl: './chart-assistance-types.component.html',
  styleUrls: ['./chart-assistance-types.component.css']
})
export class ChartAssistanceTypesComponent implements OnChanges, OnInit, OnDestroy  {

  chart: any;

  @Input()
  assistanceTypes: AssistanceTypes[] = [];

  ngOnInit(): void {
    // Adiciona o ouvinte para redimensionamento da janela
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    // Remove o ouvinte ao destruir o componente para evitar vazamento de memória
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['assistanceTypes']) {
      this.createChart();
    }
  }

  onResize() {
    this.createChart(); // Recria o gráfico ao redimensionar a janela
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destruir o gráfico anterior, se existir, para evitar sobreposição
    }

    const fontSizePx = window.innerHeight * (3 / 100); // Converte para pixels
    const fontSizeLegendPx = window.innerHeight * (2 / 100); // Converte para pixels
    const paddingPx = window.innerHeight * (2 / 100); // Converte para pixels

    const labels = this.assistanceTypes.map(item => item.unit.name);

    const qtdAtendimentoSocial = this.assistanceTypes.map(item => item.qtdAtendimentoSocial);
    const qtdAtendimentoRecepcao = this.assistanceTypes.map(item => item.qtdAtendimentoRecepcao);
    const qtdAtendimentoCadastramentoCadUnico = this.assistanceTypes.map(item => item.qtdAtendimentoCadastramentoCadUnico);
  
    this.chart = new Chart("ChartAssistanceTypes", {
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
            left: paddingPx, // Ajustar o preenchimento à esquerda
            right: paddingPx, // Ajustar o preenchimento à direita7
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'center',
            labels: {
              font: {
                size: fontSizeLegendPx, // Tamanho da fonte
                family: "'Arial', sans-serif", // Família da fonte
              },
              padding: paddingPx,
              boxWidth: fontSizeLegendPx,
              boxPadding: fontSizeLegendPx
            }
          },
          title: {
            display: true,
            text: 'Atendimentos',
            font: {
              size: fontSizePx, // Tamanho da fonte
              family: "'Arial', sans-serif", // Família da fonte
              weight: 'bold', // Peso da fonte (negrito)
            },
            color: '#333333', // Cor do texto
            align: 'start',
            padding: {
              top: 0,
              bottom: paddingPx / 2
            }
          },
          tooltip: {
            bodyFont: {
              size: fontSizePx // Increase the font size for the tooltip
            },
            titleFont: {
              size: fontSizePx // Increase the font size for the tooltip title
            }
          }
        },
        scales: {
          x: {
            ticks: {
              font: {
                size: fontSizeLegendPx, // Aumenta o tamanho da fonte das categorias do eixo x
                family: "'Arial', sans-serif",
              },
            },
            grid: {
              display: false // Desabilita a exibição das linhas da grade do eixo x
            }
          },
          y: {
            ticks: {
              font: {
                size: fontSizeLegendPx, // Aumenta o tamanho da fonte dos ticks do eixo y
                family: "'Arial', sans-serif",
              },
              stepSize: 150
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Define a cor das linhas da grade (opcional)
            }
          }
        }
      },
    });
  }
}
