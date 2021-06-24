import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';

interface User {
  id: number;
  name: string;
  data?: any;
}

@Component({
  selector: 'app-test-mergemap',
  templateUrl: './test-mergemap.component.html',
  styleUrls: ['./test-mergemap.component.scss']
})
export class TestMergemapComponent implements OnInit {

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

  executeTestTwo(): void {
    const getUser: Observable<User> = of({ id: 1, name: 'tester', data: null });

    const getData = (userId: number) => of('user data from id ' + userId.toString() + ' is here!');

    // We can use the observable as if it was an resolved object of course...
    //getData(getUser.id).subscribe((result: string) => {
    // do something....
    //});

    getUser.subscribe((user: User) => {
      getData(user.id).subscribe((data: string) => {
        user.data = data;
        this.result = user;
      });
    });

    /*
    // Lets try with map, maybe...
    const combined: Observable<User> = getUser.pipe(
      map((user: User) => {
        // Even though we see the user here, when the code run, the value of user wont be available at this point...
        // Therefore, will return an Observable of getData(user.id), meaning, Observable<Observable<string>>
        return getData(user.id);
      })
    );
    */

    /*
    // Now using mergeMap...
    const combined: Observable<User> = getUser.pipe(
      mergeMap((user: User) => {
        // At this point the user object is filled, we can use it right now, so will use the id to return another Observable
        return getData(user.id).pipe(map((data: string) => {
          user.data = data;

          // Will return an Observable of User because we re using just map on the last operator...
          // As I dont want to do anything with the value, just put it on user.data field, thats fine.
          return user;
        }));
      })
    );

    combined.subscribe((user: User) => {
      // Now we should have the fulfilled user object...
      this.result = user;
    });
    */
  }

  executeTest(): void {
    const observableOfSomething: Observable<string> = of('Total number of array elements is: ');

    const anotherObservable: Observable<number[]> = of(this.testArray);

    // Method 1:
    observableOfSomething.subscribe((message: string) => {
      anotherObservable.subscribe((numbers: number[]) => {
        this.result = message + numbers.length.toString();
      });
    });

    // Method 2:

    // Why dont we use map??
    // We want an Observable of string to subscribe and set the result variable as the Observable's return...
    /*const combinedObservable: Observable<string> = observableOfSomething.pipe(
      map((message: string) => {
        // At this point, anything you return will wrapped in an Observable...
        // You dont have the message string variable, you only know that there will be a message string variable that can be any value...
        return anotherObservable.pipe(
            map((numbers: number[]) => {
              // Same here... anything you return here will be wrapped in an Observable...
              // Therefore if you return another Observable of something here, it will return an Observable of an Observable of something
              return message + numbers.toString();              
            })
        )
      })
    );*/

    /*
    // So lets try using mergeMap...
    const combinedObservable: Observable<string> = observableOfSomething.pipe(
      mergeMap((message: string) => {
        // Now using mergeMap, anything you return at this point will be itself...
        // We do have the message string variable content right now...

        // But we still need another value from another Observable ...
        // Lets return the another Observable...
        return anotherObservable.pipe(

            // As it is our final Observable, we can use map now for its value
            // I dont need to know the value of numbers, I just need to know that I will concatenate it to the string
            map((numbers: number[]) => {
              return message + numbers.length.toString();              
            })
        )
      })
    );

    combinedObservable.subscribe((result: string) => {
      this.result = result;
    });*/
  }
}
