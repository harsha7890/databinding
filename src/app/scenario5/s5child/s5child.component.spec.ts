import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5childComponent } from './s5child.component';

describe('S5childComponent', () => {
  let component: S5childComponent;
  let fixture: ComponentFixture<S5childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
