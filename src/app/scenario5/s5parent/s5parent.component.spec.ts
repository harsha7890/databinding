import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5parentComponent } from './s5parent.component';

describe('S5parentComponent', () => {
  let component: S5parentComponent;
  let fixture: ComponentFixture<S5parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
