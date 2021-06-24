import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBehaviorSubjectComponent } from './test-behavior-subject.component';

describe('TestBehaviorSubjectComponent', () => {
  let component: TestBehaviorSubjectComponent;
  let fixture: ComponentFixture<TestBehaviorSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBehaviorSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
