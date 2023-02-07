import { TestBed } from '@angular/core/testing';

import { MagicCardsApiService } from './magic-cards-api.service';

describe('MagicCardsApiService', () => {
  let service: MagicCardsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicCardsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
