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

  specific: boolean = false;

  constructor(private unitService: UnitService,
              private violenceSituationsTypesService: ViolenceSituationsTypesService,
              private assistanceTypesService: AssistanceTypesService) { }

  ngOnInit(): void {
    this.loadUnits();
    this.loadChartAssistanceTypes();
    this.loadChartViolenceSituationsTypes();
  }

  loadChartAssistanceTypes() {
    this.assistanceTypesService.getAssistanceTypes().subscribe({
      next: data => {
        this.assistanceTypes = data;
       }
    });
  }

  loadChartViolenceSituationsTypes() {
    this.violenceSituationsTypesService.getViolenceSituationsTypes().subscribe({
      next: data => {
        this.violenceSituationsTypes = data;
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
    console.log(this.selectedUnit);

    if (this.selectedUnit.codigo != 0)
      this.specific = true;
    else
      this.specific = false;
  }
}
