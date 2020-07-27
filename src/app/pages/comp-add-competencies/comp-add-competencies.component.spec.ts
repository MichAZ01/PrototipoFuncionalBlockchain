import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAddCompetenciesComponent } from './comp-add-competencies.component';

describe('CompAddCompetenciesComponent', () => {
  let component: CompAddCompetenciesComponent;
  let fixture: ComponentFixture<CompAddCompetenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompAddCompetenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompAddCompetenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
