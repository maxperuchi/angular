import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-test-take',
  templateUrl: './test-take.component.html',
  styleUrls: ['./test-take.component.scss']
})
export class TestTakeComponent implements OnInit {

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
    const observableOfSomething: Observable<number> = from(this.testArray);

    observableOfSomething.pipe(take(2)).subscribe((n: number) => {
      alert(n);
    });
  }
}
