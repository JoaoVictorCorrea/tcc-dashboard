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
            label: "Quantidade de Ato Infracional",
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
            label: "Quantidade de Violência Física",
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
        layout: {
          padding: {
            left: 20, // Ajustar o preenchimento à esquerda
            right: 20, // Ajustar o preenchimento à direita
          }
        }
      }
    });
  }
}
