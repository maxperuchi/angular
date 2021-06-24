import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSwitchMapComponent } from './test-switch-map.component';

describe('TestSwitchMapComponent', () => {
  let component: TestSwitchMapComponent;
  let fixture: ComponentFixture<TestSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSwitchMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
