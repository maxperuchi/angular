import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-test-switch-map',
  templateUrl: './test-switch-map.component.html',
  styleUrls: ['./test-switch-map.component.scss']
})
export class TestSwitchMapComponent implements OnInit {

  public result = '';

  source = interval(1000);

  subject = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.subject.pipe(switchMap(v => {
      return this.source; 
    })).subscribe(v => {
      this.result = this.result + v;
    })
  }

  executeTest(): void {
    this.subject.next();
  }
}