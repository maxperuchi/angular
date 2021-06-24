import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-test-behavior-subject',
  templateUrl: './test-behavior-subject.component.html',
  styleUrls: ['./test-behavior-subject.component.scss']
})
export class TestBehaviorSubjectComponent implements OnInit {

  result = new Date();

  behaviorSubject = new BehaviorSubject(this.result);

  constructor() { }

  ngOnInit(): void {
  }

  subs(): void {
    this.behaviorSubject.subscribe((newDate: Date) => {
      this.result = newDate;
      alert(newDate);
    });
  }

  upd(): void {
    this.behaviorSubject.next(new Date());
  }
}
