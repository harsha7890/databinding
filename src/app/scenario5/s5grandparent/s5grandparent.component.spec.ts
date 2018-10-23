import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5grandparentComponent } from './s5grandparent.component';

describe('S5grandparentComponent', () => {
  let component: S5grandparentComponent;
  let fixture: ComponentFixture<S5grandparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5grandparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5grandparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
