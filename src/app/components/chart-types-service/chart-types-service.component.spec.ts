import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTypesServiceComponent } from './chart-types-service.component';

describe('ChartTypesServiceComponent', () => {
  let component: ChartTypesServiceComponent;
  let fixture: ComponentFixture<ChartTypesServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartTypesServiceComponent]
    });
    fixture = TestBed.createComponent(ChartTypesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
