import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityChartComponent } from './quantity-chart.component';

describe('QuantityChartComponent', () => {
  let component: QuantityChartComponent;
  let fixture: ComponentFixture<QuantityChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuantityChartComponent]
    });
    fixture = TestBed.createComponent(QuantityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
