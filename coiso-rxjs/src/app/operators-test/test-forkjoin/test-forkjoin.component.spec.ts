import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForkjoinComponent } from './test-forkjoin.component';

describe('TestForkjoinComponent', () => {
  let component: TestForkjoinComponent;
  let fixture: ComponentFixture<TestForkjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestForkjoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
