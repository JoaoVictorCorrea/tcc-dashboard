import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTypesViolenceSituationsComponent } from './chart-types-violence-situations.component';

describe('ChartTypesViolenceSituationsComponent', () => {
  let component: ChartTypesViolenceSituationsComponent;
  let fixture: ComponentFixture<ChartTypesViolenceSituationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartTypesViolenceSituationsComponent]
    });
    fixture = TestBed.createComponent(ChartTypesViolenceSituationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
