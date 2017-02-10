/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IssuesService } from './issues.service';

describe('IssuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesService]
    });
  });

  it('should ...', inject([IssuesService], (service: IssuesService) => {
    expect(service).toBeTruthy();
  }));
});
