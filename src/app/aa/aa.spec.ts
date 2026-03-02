import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa } from './aa';

describe('Aa', () => {
  let component: Aa;
  let fixture: ComponentFixture<Aa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
