import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinCounterComponent } from './coin-counter.component';

describe('CoinCounterComponent', () => {
  let component: CoinCounterComponent;
  let fixture: ComponentFixture<CoinCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
