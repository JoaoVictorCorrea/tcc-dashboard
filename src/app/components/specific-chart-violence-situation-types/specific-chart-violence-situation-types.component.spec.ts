import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificChartViolenceSituationTypesComponent } from './specific-chart-violence-situation-types.component';

describe('SpecificChartViolenceSituationTypesComponent', () => {
  let component: SpecificChartViolenceSituationTypesComponent;
  let fixture: ComponentFixture<SpecificChartViolenceSituationTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificChartViolenceSituationTypesComponent]
    });
    fixture = TestBed.createComponent(SpecificChartViolenceSituationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
