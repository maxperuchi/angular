import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-test-of',
  templateUrl: './test-of.component.html',
  styleUrls: ['./test-of.component.scss']
})
export class TestOfComponent implements OnInit {

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
    const observableOfSomething: Observable<number[]> = of(this.testArray);
    observableOfSomething.subscribe((something: number[]) => {
      this.result = something;
    });
  }
}
