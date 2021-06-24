import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIifComponent } from './test-iif.component';

describe('TestIifComponent', () => {
  let component: TestIifComponent;
  let fixture: ComponentFixture<TestIifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestIifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
