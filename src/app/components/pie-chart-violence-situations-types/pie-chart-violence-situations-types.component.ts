import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import datalabels from 'chartjs-plugin-datalabels'; // Importa o plugin datalabels
import { Unit } from 'src/app/models/unit';
import { ViolenceSituationsTypes } from 'src/app/models/violence-situations-types';

@Component({
  selector: 'app-pie-chart-violence-situations-types',
  templateUrl: './pie-chart-violence-situations-types.component.html',
  styleUrls: ['./pie-chart-violence-situations-types.component.css']
})
export class PieChartViolenceSituationsTypesComponent implements OnChanges, OnInit, OnDestroy{

  @Input()
  violenceSituationsTypes: ViolenceSituationsTypes[] = [];

  @Input()
  selectedUnit: Unit = {} as Unit;

  totalOpenViolenceSituations: number = 0.0;
  totalClosedViolenceSituations: number = 0.0;

  hasData: boolean = true;

  chart: any;

  ngOnInit(): void {
    // Adiciona o ouvinte para redimensionamento da janela
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    // Remove o ouvinte ao destruir o componente para evitar vazamento de memória
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUnit'] || changes['violenceSituationsTypes']) {
      this.createChart();
    }
  }

  onResize() {
    this.createChart(); // Recria o gráfico ao redimensionar a janela
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destroy the previous chart, if it exists, to avoid overlap
    }

    const filterViolenceSituationsTypes = this.violenceSituationsTypes.filter(item => item.unit.id === this.selectedUnit.id);

    this.totalOpenViolenceSituations = filterViolenceSituationsTypes[0].qtdOpen;
    this.totalClosedViolenceSituations = filterViolenceSituationsTypes[0].qtdClosed;

    const fontSizePx = window.innerHeight * (3 / 100); // Converte para pixels
    const fontSizeLegendPx = window.innerHeight * (3.5 / 100); // Converte para pixels
  
    const labels = ['Abertas', 'Encerradas'];

    const chartElement = document.getElementById('PieChartViolenceSituationsTypes');

    if (chartElement) {

      // Chamar o método para verificar os dados e controlar a visibilidade
      this.checkChartDataVisibility(chartElement);

      if (!this.hasData) {
        return;
      }

      this.chart = new Chart("PieChartViolenceSituationsTypes", {
        type: 'pie', // Specifies the type of chart
    
        data: {
          labels: labels,
          datasets: [
            {
              data: [this.totalOpenViolenceSituations, this.totalClosedViolenceSituations],
              backgroundColor: ['#FF5555', '#C0C0C0'],
            }
          ]
        },
        options: {
          responsive: true, // Torna o gráfico responsivo
          maintainAspectRatio: false, // Permite que o gráfico ajuste a altura automaticamente
          plugins: {
            datalabels: {
              color: 'white',
              formatter: (value) => value, // Exibe o valor no centro da fatia
              font: {
                weight: 'bold',
                size: fontSizePx
              },
              anchor: 'center',
              align: 'center'
            },
            legend: {
              position: 'right', // Posiciona a legenda à direita
              labels: {
                font: {
                  size: fontSizeLegendPx // Increase the font size for the legend labels
                }
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
          }
        },
        plugins: [datalabels] // Registra o plugin datalabels
      });
    }
  }

  checkChartDataVisibility(chartElement: HTMLElement): void {
    // Verificar se o elemento do gráfico existe e se todos os valores são iguais a zero
    if (chartElement && this.totalClosedViolenceSituations === 0 && this.totalOpenViolenceSituations === 0){
      
      chartElement.style.display = 'none';
      this.hasData = false;
    } else if (chartElement) {
      
      chartElement.style.display = 'block';
      this.hasData = true;
    }
  }
}
