import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciesMenuComponent } from './competencies-menu.component';

describe('CompetenciesMenuComponent', () => {
  let component: CompetenciesMenuComponent;
  let fixture: ComponentFixture<CompetenciesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
