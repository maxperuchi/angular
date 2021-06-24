import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-test-map',
  templateUrl: './test-map.component.html',
  styleUrls: ['./test-map.component.scss']
})
export class TestMapComponent implements OnInit {

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
    observableOfSomething.subscribe(numbers => {
      const concatenado = numbers.join('...');
      this.result = concatenado;
    });

    const stringObservable: Observable<string> = observableOfSomething.pipe(
      map((s: number[]) => {
        return s.join('...');
      })
    );

    const observer = stringObservable.subscribe((str: string) => {
      this.result = str;
    });
    observer.unsubscribe();
  }
}
