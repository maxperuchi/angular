import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLastComponent } from './test-last.component';

describe('TestLastComponent', () => {
  let component: TestLastComponent;
  let fixture: ComponentFixture<TestLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
