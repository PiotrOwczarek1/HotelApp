import { TestBed } from '@angular/core/testing';

import { MysqlDataService } from './mysql-data.service';

describe('MysqlDataService', () => {
  let service: MysqlDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysqlDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
