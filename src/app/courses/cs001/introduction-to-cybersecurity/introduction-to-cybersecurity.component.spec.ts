import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionToCybersecurityComponent } from './introduction-to-cybersecurity.component';

describe('IntroductionToCybersecurityComponent', () => {
  let component: IntroductionToCybersecurityComponent;
  let fixture: ComponentFixture<IntroductionToCybersecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionToCybersecurityComponent]
    });
    fixture = TestBed.createComponent(IntroductionToCybersecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
