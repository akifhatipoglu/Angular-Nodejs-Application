/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthIntercepterService } from './AuthIntercepter.service';

describe('Service: AuthIntercepter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthIntercepterService]
    });
  });

  it('should ...', inject([AuthIntercepterService], (service: AuthIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});