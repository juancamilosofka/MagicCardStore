import { TestBed } from '@angular/core/testing';

import { StoreCardListServiceService } from './store-card-list-service.service';

describe('StoreCardListServiceService', () => {
  let service: StoreCardListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreCardListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
