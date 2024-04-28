import { TestBed } from '@angular/core/testing';

import { TypesViolenceSituationsService } from './types-violence-situations.service';

describe('TypesViolenceSituationsService', () => {
  let service: TypesViolenceSituationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesViolenceSituationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
