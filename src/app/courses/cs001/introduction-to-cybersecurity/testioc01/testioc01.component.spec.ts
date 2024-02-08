import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testioc01Component } from './testioc01.component';

describe('Testioc01Component', () => {
  let component: Testioc01Component;
  let fixture: ComponentFixture<Testioc01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Testioc01Component]
    });
    fixture = TestBed.createComponent(Testioc01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
