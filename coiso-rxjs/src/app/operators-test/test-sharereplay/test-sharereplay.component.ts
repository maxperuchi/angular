import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators/delay';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-test-sharereplay',
  templateUrl: './test-sharereplay.component.html',
  styleUrls: ['./test-sharereplay.component.scss']
})
export class TestSharereplayComponent implements OnInit {

  public result = '';

  constructor() { }

  request: Observable<string> = of('response data').pipe(tap((() => {
    this.result += 'Request made! ' + new Date().toLocaleTimeString();
  })), delay(1000), shareReplay());

  ngOnInit(): void {
  }

  executeTest(): void {
    const getData = this.request;

    const obsA = getData.pipe(map(dt => alert(dt + ' A')));
    const obsB = getData.pipe(map(dt => alert(dt + ' B')));

    obsA.subscribe();
    obsB.subscribe();
  }
}