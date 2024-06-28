import { TestBed } from '@angular/core/testing';

import { AssistanceTypesService } from './assistance-types.service';

describe('TypesServiceService', () => {
  let service: AssistanceTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssistanceTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
