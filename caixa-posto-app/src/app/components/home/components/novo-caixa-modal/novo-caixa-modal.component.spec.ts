/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NovoCaixaModalComponent } from './novo-caixa-modal.component';

describe('NovoCaixaModalComponent', () => {
  let component: NovoCaixaModalComponent;
  let fixture: ComponentFixture<NovoCaixaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCaixaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCaixaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
