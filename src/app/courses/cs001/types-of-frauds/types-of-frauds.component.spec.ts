import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfFraudsComponent } from './types-of-frauds.component';

describe('TypesOfFraudsComponent', () => {
  let component: TypesOfFraudsComponent;
  let fixture: ComponentFixture<TypesOfFraudsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesOfFraudsComponent]
    });
    fixture = TestBed.createComponent(TypesOfFraudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
