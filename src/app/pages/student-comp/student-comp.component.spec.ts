import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCompComponent } from './student-comp.component';

describe('StudentCompComponent', () => {
  let component: StudentCompComponent;
  let fixture: ComponentFixture<StudentCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
