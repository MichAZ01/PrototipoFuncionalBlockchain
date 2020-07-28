import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificatorProfileComponent } from './verificator-profile.component';

describe('VerificatorProfileComponent', () => {
  let component: VerificatorProfileComponent;
  let fixture: ComponentFixture<VerificatorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificatorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificatorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
