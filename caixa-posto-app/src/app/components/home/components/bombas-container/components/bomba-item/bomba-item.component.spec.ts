/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BombaItemComponent } from './bomba-item.component';

describe('BombaItemComponent', () => {
  let component: BombaItemComponent;
  let fixture: ComponentFixture<BombaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
