import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onlinetest1Component } from './onlinetest1.component';

describe('Onlinetest1Component', () => {
  let component: Onlinetest1Component;
  let fixture: ComponentFixture<Onlinetest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onlinetest1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Onlinetest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
