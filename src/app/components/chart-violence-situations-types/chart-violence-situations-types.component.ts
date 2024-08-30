import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ViolenceSituationsTypes } from 'src/app/models/violence-situations-types';

@Component({
  selector: 'app-chart-violence-situations-types',
  templateUrl: './chart-violence-situations-types.component.html',
  styleUrls: ['./chart-violence-situations-types.component.css']
})
export class ChartViolenceSituationsTypesComponent implements OnChanges, OnInit, OnDestroy {

  chart: any;

  @Input()
  violenceSituationsTypes: ViolenceSituationsTypes[] = [];

  ngOnInit(): void {
    // Adiciona o ouvinte para redimensionamento da janela
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    // Remove o ouvinte ao destruir o componente para evitar vazamento de memória
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['violenceSituationsTypes']) {
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

    const labels = this.violenceSituationsTypes.map(item => item.unidade.nome);

    const qtdAtoInfracional = this.violenceSituationsTypes.map(item => item.qtdAtoInfracional);
    const qtdFisica = this.violenceSituationsTypes.map(item => item.qtdFisica);
    const qtdPsicologica = this.violenceSituationsTypes.map(item => item.qtdPsicologica);
  
    this.chart = new Chart("ChartViolenceSituationsTypes", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labels,
	      datasets: [
          {
            label: "Violência Física",
            data: qtdFisica,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(53, 94, 59, 0.75)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(53, 94, 59, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          },
          {
            label: "Ato Infracional",
            data: qtdAtoInfracional,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(255, 0, 0, 0.7)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(255, 0, 0, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          },
          {
            label: "Violência Psicológica",
            data: qtdPsicologica,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(255, 0, 255, 0.7)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          }
        ]
      },
      options: {
        aspectRatio: 4,
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 20, // Ajustar o preenchimento à esquerda
            right: 20, // Ajustar o preenchimento à direita
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
            text: 'Situações de Violência',
            font: {
              size: fontSizePx, // Tamanho da fonte
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
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Define a cor das linhas da grade (opcional)
            }
          }
        }
      }
    });
  }
}
