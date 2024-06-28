import { TestBed } from '@angular/core/testing';

import { ViolenceSituationsTypesService } from './violence-situations-types.service';

describe('TypesViolenceSituationsService', () => {
  let service: ViolenceSituationsTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViolenceSituationsTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
