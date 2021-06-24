import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';
import { last } from 'rxjs/internal/operators/last';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-test-last',
  templateUrl: './test-last.component.html',
  styleUrls: ['./test-last.component.scss']
})
export class TestLastComponent implements OnInit {

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

    observableOfSomething.pipe(
      take(2),
      last(),
      map(numero => {
        alert(numero);
        return 'ola ' + numero.toString();
      }));
  }
}
