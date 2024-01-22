import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysToAvoidScamsComponent } from './ways-to-avoid-scams.component';

describe('WaysToAvoidScamsComponent', () => {
  let component: WaysToAvoidScamsComponent;
  let fixture: ComponentFixture<WaysToAvoidScamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaysToAvoidScamsComponent]
    });
    fixture = TestBed.createComponent(WaysToAvoidScamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
