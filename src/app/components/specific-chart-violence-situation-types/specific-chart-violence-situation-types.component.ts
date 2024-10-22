import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Unit } from 'src/app/models/unit';
import { ViolenceSituationsTypes } from 'src/app/models/violence-situations-types';

@Component({
  selector: 'app-specific-chart-violence-situation-types',
  templateUrl: './specific-chart-violence-situation-types.component.html',
  styleUrls: ['./specific-chart-violence-situation-types.component.css']
})
export class SpecificChartViolenceSituationTypesComponent implements OnChanges, OnInit, OnDestroy {

  chart: any;

  @Input()
  violenceSituationsTypes: ViolenceSituationsTypes[] = [];

  @Input()
  selectedUnit: Unit = {} as Unit;

  ngOnInit(): void {
    // Adiciona o ouvinte para redimensionamento da janela
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    // Remove o ouvinte ao destruir o componente para evitar vazamento de memória
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUnit']) {
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

    const filterViolenceSituationsTypes = this.violenceSituationsTypes.filter(item => item.unit.id === this.selectedUnit.id); //filtro apenas com a unidade selecionada
    const labels = filterViolenceSituationsTypes.map(item => item.unit.name);

    const qtdAtoInfracional = filterViolenceSituationsTypes.map(item => item.qtdAtoInfracional);
    const qtdFisica = filterViolenceSituationsTypes.map(item => item.qtdFisica);
    const qtdPsicologica = filterViolenceSituationsTypes.map(item => item.qtdPsicologica);
    const qtdSexual = filterViolenceSituationsTypes.map(item => item.qtdAbusoOuViolenciaSexual);
    const qtdNegligenciaContraCrianca = filterViolenceSituationsTypes.map(item => item.qtdNegligenciaContraCrianca);
  
    this.chart = new Chart("SpecificChartViolenceSituationsTypes", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labels,
	      datasets: [
          {
            label: "Física",
            data: qtdFisica,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(173, 216, 230, 0.5)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(173, 216, 230, 0.5)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          },
          {
            label: "Ato Infracional",
            data: qtdAtoInfracional,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(255, 0, 0, 0.75)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(255, 0, 0, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          },
          {
            label: "Psicológica",
            data: qtdPsicologica,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(255, 0, 255, 0.75)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(255, 0, 255, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          },
          {
            label: "Abuso ou Violência Sexual",
            data: qtdSexual,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(128, 0, 128, 0.75)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(128, 0, 128, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10, // Adiciona bordas arredondadas
          },
          {
            label: "Negligência contra Criança",
            data: qtdNegligenciaContraCrianca,
            backgroundColor: [ // Aqui você define os gradientes para cada barra
              'rgba(255, 165, 0, 0.75)', 
            ],
            barPercentage: 0.8,
            borderColor: [ // Cores das bordas das barras
              'rgba(255, 165, 0, 1)'
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
            left: paddingPx, // Ajustar o preenchimento à esquerda
            right: paddingPx, // Ajustar o preenchimento à direita
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
            text: 'Situações de Violência',
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
      }
    });
  }
}