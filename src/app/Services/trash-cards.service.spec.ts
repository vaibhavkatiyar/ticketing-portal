import { TestBed } from '@angular/core/testing';

import { TrashCardsService } from './trash-cards.service';

describe('TrashCardsService', () => {
  let service: TrashCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrashCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
