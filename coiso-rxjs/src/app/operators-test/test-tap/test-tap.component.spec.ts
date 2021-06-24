import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTapComponent } from './test-tap.component';

describe('TestTapComponent', () => {
  let component: TestTapComponent;
  let fixture: ComponentFixture<TestTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
