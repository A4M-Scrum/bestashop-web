import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y } from './y';

describe('Y', () => {
  let component: Y;
  let fixture: ComponentFixture<Y>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Y]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Y);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
