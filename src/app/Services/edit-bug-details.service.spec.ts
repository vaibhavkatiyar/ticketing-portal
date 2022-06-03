import { TestBed } from '@angular/core/testing';

import { EditBugDetailsService } from './edit-bug-details.service';

describe('EditBugDetailsService', () => {
  let service: EditBugDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditBugDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
