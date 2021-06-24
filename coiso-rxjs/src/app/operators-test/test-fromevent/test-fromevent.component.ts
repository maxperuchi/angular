import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-test-fromevent',
  templateUrl: './test-fromevent.component.html',
  styleUrls: ['./test-fromevent.component.scss']
})
export class TestFromeventComponent implements OnInit {

  result = '';

  constructor() { }

  ngOnInit(): void {
    fromEvent(document.getElementById('tst-btn'), 'click').subscribe(() => this.executeTest());
  }

  executeTest(): void {
    this.result += 'Clicked!!!';
  }
}
