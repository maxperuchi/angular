import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { iif } from 'rxjs/internal/observable/iif';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-test-iif',
  templateUrl: './test-iif.component.html',
  styleUrls: ['./test-iif.component.scss']
})
export class TestIifComponent implements OnInit {

  public inputArray1: string = '1,2,3';

  public testArray1: Array<number> = [];

  public inputArray2: string = '4,5,6';

  public testArray2: Array<number> = []

  public result: any;

  public condition: boolean;

  constructor() { }

  ngOnInit(): void {
    this.setArray1();
    this.setArray2();
  }

  setArray1(): void {
    this.testArray1 = this.inputArray1.split(',').map(v => Number(v));
  }

  setArray2(): void {
    this.testArray2 = this.inputArray2.split(',').map(v => Number(v));
  }

  executeTest(): void {
    const observableOfSomething1: Observable<number[]> = of(this.testArray1);
    const observableOfSomething2: Observable<number[]> = of(this.testArray2);

    iif(() => this.condition, observableOfSomething1, observableOfSomething2).subscribe(r => {
      this.result = r;
    });
  }
}