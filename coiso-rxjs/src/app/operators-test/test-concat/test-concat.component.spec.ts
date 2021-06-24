import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestConcatComponent } from './test-concat.component';

describe('TestConcatComponent', () => {
  let component: TestConcatComponent;
  let fixture: ComponentFixture<TestConcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestConcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
