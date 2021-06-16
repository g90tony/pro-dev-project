import { TestBed } from '@angular/core/testing';

import { ClientloginService } from './clientlogin.service';

describe('ClientloginService', () => {
  let service: ClientloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
