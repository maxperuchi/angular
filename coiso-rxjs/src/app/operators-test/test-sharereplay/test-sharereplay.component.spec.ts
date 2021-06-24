import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSharereplayComponent } from './test-sharereplay.component';

describe('TestSharereplayComponent', () => {
  let component: TestSharereplayComponent;
  let fixture: ComponentFixture<TestSharereplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSharereplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSharereplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
