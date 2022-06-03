import { TestBed } from '@angular/core/testing';

import { AutoUpdateBugListService } from './auto-update-bug-list.service';

describe('AutoUpdateBugListService', () => {
  let service: AutoUpdateBugListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoUpdateBugListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
