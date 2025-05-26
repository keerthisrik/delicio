import { TestBed } from '@angular/core/testing';

import { AssortedboxesService } from './assortedboxes.service';

describe('AssortedboxesService', () => {
  let service: AssortedboxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssortedboxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
