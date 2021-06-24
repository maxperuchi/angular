import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOfComponent } from './test-of.component';

describe('TestOfComponent', () => {
  let component: TestOfComponent;
  let fixture: ComponentFixture<TestOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
