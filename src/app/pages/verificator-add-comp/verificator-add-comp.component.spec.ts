import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificatorAddCompComponent } from './verificator-add-comp.component';

describe('VerificatorAddCompComponent', () => {
  let component: VerificatorAddCompComponent;
  let fixture: ComponentFixture<VerificatorAddCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificatorAddCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificatorAddCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
