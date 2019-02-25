import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyHeaderComponent } from './currency-header.component';

describe('CurrencyHeaderComponent', () => {
  let component: CurrencyHeaderComponent;
  let fixture: ComponentFixture<CurrencyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
