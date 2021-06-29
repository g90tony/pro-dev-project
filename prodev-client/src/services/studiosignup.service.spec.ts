import { TestBed } from '@angular/core/testing';

import { StudiosignupService } from './studiosignup.service';

describe('StudiosignupService', () => {
  let service: StudiosignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiosignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
