import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerMenuComponent } from './employer-menu.component';

describe('EmployerMenuComponent', () => {
  let component: EmployerMenuComponent;
  let fixture: ComponentFixture<EmployerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
