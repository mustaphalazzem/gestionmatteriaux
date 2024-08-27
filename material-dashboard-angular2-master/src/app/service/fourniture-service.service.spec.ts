import { TestBed } from '@angular/core/testing';

import { FournitureServiceService } from './fourniture-service.service';

describe('FournitureServiceService', () => {
  let service: FournitureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FournitureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
