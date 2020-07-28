import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificatorMenuComponent } from './verificator-menu.component';

describe('VerificatorMenuComponent', () => {
  let component: VerificatorMenuComponent;
  let fixture: ComponentFixture<VerificatorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificatorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificatorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
