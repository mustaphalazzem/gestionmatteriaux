import { TestBed } from '@angular/core/testing';

import { FormeAchatServiceService } from './forme-achat-service.service';

describe('FormeAchatServiceService', () => {
  let service: FormeAchatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormeAchatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
