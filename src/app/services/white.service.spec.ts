import { TestBed } from '@angular/core/testing';

import { WhiteService } from './white.service';

describe('WhiteService', () => {
  let service: WhiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
