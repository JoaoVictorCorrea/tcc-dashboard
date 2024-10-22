import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AssistanceTypes } from 'src/app/models/assistance-types';
import datalabels from 'chartjs-plugin-datalabels'; // Importa o plugin datalabels
import { Unit } from 'src/app/models/unit';

@Component({
  selector: 'app-pie-chart-assistance-types',
  templateUrl: './pie-chart-assistance-types.component.html',
  styleUrls: ['./pie-chart-assistance-types.component.css']
})
export class PieChartAssistanceTypesComponent implements OnChanges, OnInit, OnDestroy{

  @Input()
  assistanceTypes: AssistanceTypes[] = [];

  @Input()
  selectedUnit: Unit = {} as Unit;

  totalSocial: number = 0.0;
  totalRecepcao: number = 0.0;
  totalCadastroCadUnico: number = 0.0;
  totalAtualizacaoCadUnico: number = 0.0;
  totalVisitaDomiciliar: number = 0.0;

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
    if (changes['selectedUnit']) {
      this.sumTotalAssistanceTypes();
      this.createChart();
    }
  }

  onResize() {
    this.createChart(); // Recria o gráfico ao redimensionar a janela
  }

  sumTotalAssistanceTypes() {
    const filterAssistanceTypes = this.assistanceTypes.filter(item => item.unit.id === this.selectedUnit.id); //filtro apenas com a unidade selecionada

    this.totalSocial = filterAssistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoSocial, 0);
    this.totalRecepcao = filterAssistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoRecepcao, 0);
    this.totalCadastroCadUnico = filterAssistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoCadastramentoCadUnico, 0);
    this.totalAtualizacaoCadUnico = filterAssistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoAtualizacaoCadUnico, 0);
    this.totalVisitaDomiciliar = filterAssistanceTypes.reduce((sum, item) => sum + item.qtdVisitaDomiciliar, 0);
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destroy the previous chart, if it exists, to avoid overlap
    }

    const fontSizePx = window.innerHeight * (2 / 100); // Converte para pixels
    const fontSizeLegendPx = window.innerHeight * (2 / 100); // Converte para pixels
  
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
