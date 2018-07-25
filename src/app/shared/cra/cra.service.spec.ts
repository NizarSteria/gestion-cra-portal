import { TestBed, inject } from '@angular/core/testing';

import { CraService } from './cra.service';

describe('CraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CraService]
    });
  });

  it('should be created', inject([CraService], (service: CraService) => {
    expect(service).toBeTruthy();
  }));
});
