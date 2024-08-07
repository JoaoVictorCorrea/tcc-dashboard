import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ViolenceSituationsTypes } from 'src/app/models/violence-situations-types';
import { ViolenceSituationsTypesService } from 'src/app/services/violence-situations-types.service';

@Component({
  selector: 'app-chart-violence-situations-types',
  templateUrl: './chart-violence-situations-types.component.html',
  styleUrls: ['./chart-violence-situations-types.component.css']
})
export class ChartViolenceSituationsTypesComponent implements OnInit {

  chart: any;
  violenceSituationsTypes: ViolenceSituationsTypes[] = [];

  constructor(private violenceSituationsTypesService: ViolenceSituationsTypesService) { }
  
  ngOnInit(): void {
    this.loadChartViolenceSituationsTypes();
  }

  loadChartViolenceSituationsTypes() {
    this.violenceSituationsTypesService.getViolenceSituationsTypes().subscribe({
      next: data => {
        this.violenceSituationsTypes = data;
        this.createChart();
       }
    });
  }

  createChart() {
    const labels = this.violenceSituationsTypes.map(item => item.unidade.nome);

    const qtdAtoInfracional = this.violenceSituationsTypes.map(item => item.qtdAtoInfracional);
    const qtdFisica = this.violenceSituationsTypes.map(item => item.qtdFisica);
  
    this.chart = new Chart("ChartViolenceSituationsTypes", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labels,
	      datasets: [
          {
            label: "Ato Infracional",
            data: qtdAtoInfracional,
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
            label: "Violência Física",
            data: qtdFisica,
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
              boxWidth: 20,
              boxPadding: 20
            }
          },
          title: {
            display: true,
            text: 'Situações de Violência',
            font: {
              size: 20, // Tamanho da fonte
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
        }
      }
    });
  }
}
