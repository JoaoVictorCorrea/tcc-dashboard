import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unit } from 'src/app/models/unit';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{

  @Input()
  selectedUnit: Unit = {} as Unit;

  @Input()
  units: Unit[] = [];

  @Input()
  years: string[] = [];

  @Output()
  selectedUnitEvent = new EventEmitter<Unit>();

  onUnitChanged() {
    this.selectedUnitEvent.emit(this.selectedUnit);
  }
}
