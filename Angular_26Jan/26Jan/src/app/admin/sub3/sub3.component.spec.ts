import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub3Component } from './sub3.component';

describe('Sub3Component', () => {
  let component: Sub3Component;
  let fixture: ComponentFixture<Sub3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sub3Component]
    });
    fixture = TestBed.createComponent(Sub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
