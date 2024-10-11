import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unit } from 'src/app/models/unit';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{

  @Input()
  selectedUnit: Unit = {} as Unit;

  @Input()
  selectedYear: string = {} as string;

  @Input()
  units: Unit[] = [];

  @Input()
  years: string[] = [];

  @Output()
  selectedUnitEvent = new EventEmitter<Unit>();

  @Output()
  selectedYearEvent = new EventEmitter<string>();

  onUnitChanged() {
    this.selectedUnitEvent.emit(this.selectedUnit);
  }

  onYearChanged() {
    this.selectedYearEvent.emit(this.selectedYear);
  }
}
