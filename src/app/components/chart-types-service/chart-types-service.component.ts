import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TypesService } from 'src/app/models/types-service';
import { TypesServiceService } from 'src/app/services/types-service.service';

@Component({
  selector: 'app-chart-types-service',
  templateUrl: './chart-types-service.component.html',
  styleUrls: ['./chart-types-service.component.css']
})
export class ChartTypesServiceComponent implements OnInit {

  chart: any;
  typesService: TypesService[] = [];

  constructor(private typesServiceService: TypesServiceService) { }
  
  ngOnInit(): void {
    this.loadChartTypesService();
  }

  loadChartTypesService() {
    this.typesServiceService.getTypesService().subscribe({
      next: data => {
        this.typesService = data;
        this.createChart();
       }
    });

  }
  createChart() {
    const labels = this.typesService.map(item => item.unidade.nome);

    const qtdAtendimentoSocial = this.typesService.map(item => item.qtdAtendimentoSocial);
    const qtdAtendimentoRecepcao = this.typesService.map(item => item.qtdAtendimentoRecepcao);
  
    this.chart = new Chart("MyChart", {
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
