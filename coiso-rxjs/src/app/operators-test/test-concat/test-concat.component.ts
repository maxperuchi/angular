import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-test-concat',
  templateUrl: './test-concat.component.html',
  styleUrls: ['./test-concat.component.scss']
})
export class TestConcatComponent implements OnInit {

  public inputArray1: string = '1,2,3';
  public inputArray2: string = '4,5,6';
  public inputArray3: string = '7,8,9';

  public testArray1: Array<number> = [];
  public testArray2: Array<number> = [];
  public testArray3: Array<number> = [];

  public result: any;

  constructor() { }

  ngOnInit(): void {
    this.setArray1();
    this.setArray2();
    this.setArray3();
  }

  setArray1(): void {
    this.testArray1 = this.inputArray1.split(',').map(v => Number(v));
  }

  setArray2(): void {
    this.testArray2 = this.inputArray2.split(',').map(v => Number(v));
  }

  setArray3(): void {
    this.testArray3 = this.inputArray3.split(',').map(v => Number(v));
  }

  executeTest(): void {
    const observableOfSomething1: Observable<number[]> = of(this.testArray1);
    const observableOfSomething2: Observable<number[]> = of(this.testArray2);
    const observableOfSomething3: Observable<number[]> = of(this.testArray3);

    const all = forkJoin([observableOfSomething1, observableOfSomething2, observableOfSomething3])
      .pipe(map(a => 
          a[0].concat(a[1].concat(a[2]))
        ), tap((val) => {
          this.result = val;
      })).subscribe();
  }
}
