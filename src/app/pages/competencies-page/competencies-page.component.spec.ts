import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciesPageComponent } from './competencies-page.component';

describe('CompetenciesPageComponent', () => {
  let component: CompetenciesPageComponent;
  let fixture: ComponentFixture<CompetenciesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
