import { TestBed } from '@angular/core/testing';

import { StudiologinService } from './studiologin.service';

describe('StudiologinService', () => {
  let service: StudiologinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudiologinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
