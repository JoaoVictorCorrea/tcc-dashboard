import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartViolenceSituationsTypesComponent } from './chart-violence-situations-types.component';

describe('ChartViolenceSituationsTypesComponent', () => {
  let component: ChartViolenceSituationsTypesComponent;
  let fixture: ComponentFixture<ChartViolenceSituationsTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartViolenceSituationsTypesComponent]
    });
    fixture = TestBed.createComponent(ChartViolenceSituationsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
