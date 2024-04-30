import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { TypesViolenceSituations } from 'src/app/models/types-violence-situations';
import { TypesViolenceSituationsService } from 'src/app/services/types-violence-situations.service';

@Component({
  selector: 'app-chart-types-violence-situations',
  templateUrl: './chart-types-violence-situations.component.html',
  styleUrls: ['./chart-types-violence-situations.component.css']
})
export class ChartTypesViolenceSituationsComponent implements OnInit {

  chart: any;
  typesViolenceSituations: TypesViolenceSituations[] = [];

  constructor(private typesViolenceSituationsService: TypesViolenceSituationsService) { }
  
  ngOnInit(): void {
    this.loadChartTypesViolenceSituations();
  }

  loadChartTypesViolenceSituations() {
    this.typesViolenceSituationsService.getTypesViolenceSituations().subscribe({
      next: data => {
        this.typesViolenceSituations = data;
        this.createChart();
       }
    });
  }

  createChart() {
    const labels = this.typesViolenceSituations.map(item => item.unidade.nome);

    const qtdAtoInfracional = this.typesViolenceSituations.map(item => item.qtdAtoInfracional);
    const qtdFisica = this.typesViolenceSituations.map(item => item.qtdFisica);
  
    this.chart = new Chart("ChartTypesViolenceSituations", {
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
