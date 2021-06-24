import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-test-from',
  templateUrl: './test-from.component.html',
  styleUrls: ['./test-from.component.scss']
})
export class TestFromComponent implements OnInit {

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
    this.result = [];
    const observableFromSomething: Observable<number> = from(this.testArray);
    observableFromSomething.subscribe((something: number) => {
      const message = 'observable emitted! ' + something.toString();
      this.result.push(message);
      alert(message);
    });
  }
}
