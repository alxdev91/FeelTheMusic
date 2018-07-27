import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivSingersComponent } from './div-singers.component';

describe('DivSingersComponent', () => {
  let component: DivSingersComponent;
  let fixture: ComponentFixture<DivSingersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivSingersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivSingersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
