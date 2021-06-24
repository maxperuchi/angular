import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-test-filter',
  templateUrl: './test-filter.component.html',
  styleUrls: ['./test-filter.component.scss']
})
export class TestFilterComponent implements OnInit {

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

    observableFromSomething.pipe(
      filter((s: number) => {
        return s > 2;
      })).subscribe((s: number) => {
        this.result.push(s);
      });
  }

}
