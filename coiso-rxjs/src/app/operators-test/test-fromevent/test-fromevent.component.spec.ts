import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFromeventComponent } from './test-fromevent.component';

describe('TestFromeventComponent', () => {
  let component: TestFromeventComponent;
  let fixture: ComponentFixture<TestFromeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFromeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFromeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
