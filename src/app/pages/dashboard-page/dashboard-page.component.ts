import { Component } from '@angular/core';
import { AssistanceTypes } from 'src/app/models/assistance-types';
import { Unit } from 'src/app/models/unit';
import { ViolenceSituationsTypes } from 'src/app/models/violence-situations-types';
import { AssistanceTypesService } from 'src/app/services/assistance-types.service';
import { UnitService } from 'src/app/services/unit.service';
import { ViolenceSituationsTypesService } from 'src/app/services/violence-situations-types.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  units: Unit[] = [];
  selectedUnit: Unit = {} as Unit;
  years: string[] = ["Geral", "2024", "2023", "2022", "2021", "2020"];

  violenceSituationsTypes: ViolenceSituationsTypes[] = [];
  assistanceTypes: AssistanceTypes[] = [];

  totalAssistanceTypes: number = 0.0;
  totalViolenceSituationsTypes: number = 0.0;

  totalOpenViolenceSituations: number = 36.0;

  descriptionAssistanceTypes: string = 'atendimentos';
  descriptionViolenceSituationsTypes: string = 'situações de violência';

  specific: boolean = false;

  constructor(private unitService: UnitService,
              private violenceSituationsTypesService: ViolenceSituationsTypesService,
              private assistanceTypesService: AssistanceTypesService) { }

  ngOnInit(): void {
    this.loadUnits();
    this.loadChartAssistanceTypes();
    this.loadChartViolenceSituationsTypes();
  }

  loadChartAssistanceTypes(unit?: Unit) {
    this.assistanceTypesService.getAssistanceTypes().subscribe({
      next: data => {
        if (unit) {
          this.assistanceTypes = data.filter(item => item.unidade.codigo === this.selectedUnit.codigo);
          this.totalAssistanceTypes = this.sumTotalAssistanceTypes(); 
        }
        else {
          this.assistanceTypes = data;
        }
       }
    });
  }

  sumTotalViolenceSituationsTypes(): number {
    let sum = 0.0;

    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdAbusoOuViolenciaSexual, 0);
    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdAtoInfracional, 0);
    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdFisica, 0);
    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdNegligenciaContraCrianca, 0);
    sum += this.violenceSituationsTypes.reduce((sum, item) => sum + item.qtdPsicologica, 0);

    return sum;
  }

  sumTotalAssistanceTypes(): number {
    let sum = 0.0;

    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoAtualizacaoCadUnico, 0);
    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoCadastramentoCadUnico, 0);
    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoRecepcao, 0);
    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdAtendimentoSocial, 0);
    sum += this.assistanceTypes.reduce((sum, item) => sum + item.qtdVisitaDomiciliar, 0);

    return sum;
  }

  loadChartViolenceSituationsTypes(unit?: Unit) {
    this.violenceSituationsTypesService.getViolenceSituationsTypes().subscribe({
      next: data => {
        if (unit) {
          this.violenceSituationsTypes = data.filter(item => item.unidade.codigo === this.selectedUnit.codigo);
          this.totalViolenceSituationsTypes = this.sumTotalViolenceSituationsTypes();
        }
        else {
          this.violenceSituationsTypes = data;
        }
       }
    });
  }

  loadUnits() {
    this.unitService.getUnits().subscribe({
      next: data => {
        // Adiciona a unidade 'fake' no início da lista
        this.units = [{ codigo: 0, nome: 'Selecione uma Unidade' }, ...data];
        
        // Define a unidade selecionada como a unidade 'fake'
        this.selectedUnit = this.units[0];
       }
    });
  }

  onSelectedUnit(unit: Unit) {
    this.selectedUnit = unit;

    if (this.selectedUnit.codigo != 0) {
      this.specific = true;
      this.loadChartAssistanceTypes(this.selectedUnit);
      this.loadChartViolenceSituationsTypes(this.selectedUnit);
    }
    else {
      this.specific = false;
      this.loadChartAssistanceTypes();
      this.loadChartViolenceSituationsTypes();
    }
  }
}
