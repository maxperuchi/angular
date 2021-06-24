import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-test-subject',
  templateUrl: './test-subject.component.html',
  styleUrls: ['./test-subject.component.scss']
})
export class TestSubjectComponent implements OnInit {

  result = new Date();

  subject = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.subject.subscribe(() => {
      alert('recebi');
    });
  }

  subs(): void {
    this.subject.subscribe((newDate: Date) => {
      this.result = newDate;
    });
   }

  upd(): void {
    this.subject.next(new Date());
  }
}
