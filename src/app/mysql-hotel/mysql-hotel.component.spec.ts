import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlHotelComponent } from './mysql-hotel.component';

describe('MysqlHotelComponent', () => {
  let component: MysqlHotelComponent;
  let fixture: ComponentFixture<MysqlHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
