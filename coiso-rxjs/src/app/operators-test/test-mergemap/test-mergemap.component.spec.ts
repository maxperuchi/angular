import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMergemapComponent } from './test-mergemap.component';

describe('TestMergemapComponent', () => {
  let component: TestMergemapComponent;
  let fixture: ComponentFixture<TestMergemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMergemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMergemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
