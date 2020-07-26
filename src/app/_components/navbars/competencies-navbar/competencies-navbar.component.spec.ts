import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciesNavbarComponent } from './competencies-navbar.component';

describe('CompetenciesNavbarComponent', () => {
  let component: CompetenciesNavbarComponent;
  let fixture: ComponentFixture<CompetenciesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
