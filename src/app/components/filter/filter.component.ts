import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/models/unit';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  units: Unit[] = [];
  years: string[] = ["Geral", "2024", "2023", "2022", "2021", "2020"];

  constructor(private unitService: UnitService) { }
  
  ngOnInit(): void {
    this.loadUnits();
  }

  loadUnits() {
    this.unitService.getUnits().subscribe({
      next: data => {
        this.units = data;
       }
    });
  }
}
