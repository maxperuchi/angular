import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { tap } from 'rxjs/internal/operators/tap';

interface User {
  id: number;
  name: string;
  data?: any;
}

@Component({
  selector: 'app-test-tap',
  templateUrl: './test-tap.component.html',
  styleUrls: ['./test-tap.component.scss']
})
export class TestTapComponent implements OnInit {

  public inputArray: string = '1,2,3';

  public testArray: Array<number> = [];

  public result: any;

  constructor() { }

  ngOnInit(): void {
    this.setArray();
  }

  setArray(): void {
    this.testArray = this.inputArray.split(',').map(v => Number(v));
  }

  executeTest(): void {
    const observableOfSomething: Observable<string> = of('Total number of array elements is: ');

    const anotherObservable: Observable<number[]> = of(this.testArray).pipe(tap(n => alert('Im tapped, elements: ' + n.toString())));

    observableOfSomething.subscribe((message: string) => {
      anotherObservable.pipe(tap(() => alert('Now I will set...'))).subscribe((numbers: number[]) => {
        this.result = message + numbers.length.toString();
      });
    });
  }
}