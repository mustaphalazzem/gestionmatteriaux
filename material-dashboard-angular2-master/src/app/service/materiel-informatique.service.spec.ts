import { TestBed } from '@angular/core/testing';

import { MaterielInformatiqueService } from './materiel-informatique.service';

describe('MaterielInformatiqueService', () => {
  let service: MaterielInformatiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterielInformatiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
