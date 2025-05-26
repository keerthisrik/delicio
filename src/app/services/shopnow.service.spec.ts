import { TestBed } from '@angular/core/testing';

import { ShopnowService } from './shopnow.service';

describe('ShopnowService', () => {
  let service: ShopnowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopnowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
