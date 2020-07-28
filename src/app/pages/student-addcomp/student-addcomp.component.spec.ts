import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddcompComponent } from './student-addcomp.component';

describe('StudentAddcompComponent', () => {
  let component: StudentAddcompComponent;
  let fixture: ComponentFixture<StudentAddcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAddcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
