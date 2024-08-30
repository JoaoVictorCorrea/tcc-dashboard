import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartViolenceSituationsTypesComponent } from './pie-chart-violence-situations-types.component';

describe('PieChartViolenceSituationsTypesComponent', () => {
  let component: PieChartViolenceSituationsTypesComponent;
  let fixture: ComponentFixture<PieChartViolenceSituationsTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartViolenceSituationsTypesComponent]
    });
    fixture = TestBed.createComponent(PieChartViolenceSituationsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
