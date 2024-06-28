import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAssistanceTypesComponent } from './chart-assistance-types.component';

describe('ChartTypesServiceComponent', () => {
  let component: ChartAssistanceTypesComponent;
  let fixture: ComponentFixture<ChartAssistanceTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartAssistanceTypesComponent]
    });
    fixture = TestBed.createComponent(ChartAssistanceTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
