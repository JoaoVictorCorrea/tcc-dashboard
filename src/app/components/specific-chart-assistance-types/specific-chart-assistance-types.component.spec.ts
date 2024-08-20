import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificChartAssistanceTypesComponent } from './specific-chart-assistance-types.component';

describe('SpecificChartAssistanceTypesComponent', () => {
  let component: SpecificChartAssistanceTypesComponent;
  let fixture: ComponentFixture<SpecificChartAssistanceTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificChartAssistanceTypesComponent]
    });
    fixture = TestBed.createComponent(SpecificChartAssistanceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
