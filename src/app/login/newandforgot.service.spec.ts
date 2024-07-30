import { TestBed } from '@angular/core/testing';

import { NewandforgotService } from './newandforgot.service';

describe('NewandforgotService', () => {
  let service: NewandforgotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewandforgotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
