import { Component } from '@angular/core';
import { Unit } from 'src/app/models/unit';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {

  units: Unit[] = [];
  selectedUnit: Unit = {} as Unit;
  years: string[] = ["Geral", "2024", "2023", "2022", "2021", "2020"];

  specific: boolean = false;

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.loadUnits();
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
