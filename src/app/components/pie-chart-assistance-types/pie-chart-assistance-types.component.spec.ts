import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartAssistanceTypesComponent } from './pie-chart-assistance-types.component';

describe('PieChartAssistanceTypesComponent', () => {
  let component: PieChartAssistanceTypesComponent;
  let fixture: ComponentFixture<PieChartAssistanceTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartAssistanceTypesComponent]
    });
    fixture = TestBed.createComponent(PieChartAssistanceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
