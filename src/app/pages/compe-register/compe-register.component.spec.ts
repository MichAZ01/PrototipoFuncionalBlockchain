import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeRegisterComponent } from './compe-register.component';

describe('CompeRegisterComponent', () => {
  let component: CompeRegisterComponent;
  let fixture: ComponentFixture<CompeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
