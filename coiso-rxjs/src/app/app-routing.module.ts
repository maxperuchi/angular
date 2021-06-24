import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestConcatComponent } from './operators-test/test-concat/test-concat.component';
import { TestFilterComponent } from './operators-test/test-filter/test-filter.component';
import { TestForkjoinComponent } from './operators-test/test-forkjoin/test-forkjoin.component';
import { TestFromComponent } from './operators-test/test-from/test-from.component';
import { TestFromeventComponent } from './operators-test/test-fromevent/test-fromevent.component';
import { TestIifComponent } from './operators-test/test-iif/test-iif.component';
import { TestLastComponent } from './operators-test/test-last/test-last.component';
import { TestMapComponent } from './operators-test/test-map/test-map.component';
import { TestMergemapComponent } from './operators-test/test-mergemap/test-mergemap.component';
import { TestOfComponent } from './operators-test/test-of/test-of.component';
import { TestSharereplayComponent } from './operators-test/test-sharereplay/test-sharereplay.component';
import { TestSwitchMapComponent } from './operators-test/test-switch-map/test-switch-map.component';
import { TestTakeComponent } from './operators-test/test-take/test-take.component';
import { TestTapComponent } from './operators-test/test-tap/test-tap.component';
import { TestBehaviorSubjectComponent } from './test-behavior-subject/test-behavior-subject.component';
import { TestSubjectComponent } from './test-subject/test-subject.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '*',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'of',
    component: TestOfComponent
  },
  {
    path: 'from',
    component: TestFromComponent
  },
  {
    path: 'filter',
    component: TestFilterComponent
  },
  {
    path: 'map',
    component: TestMapComponent
  },
  {
    path: 'mergemap',
    component: TestMergemapComponent
  },
  {
    path: 'tap',
    component: TestTapComponent
  },
  {
    path: 'take',
    component: TestTakeComponent
  },
  {
    path: 'last',
    component: TestLastComponent
  },
  {
    path: 'forkjoin',
    component: TestForkjoinComponent
  },
  {
    path: 'iif',
    component: TestIifComponent
  },
  {
    path: 'switchmap',
    component: TestSwitchMapComponent
  },
  {
    path: 'sharereplay',
    component: TestSharereplayComponent
  },
  {
    path: 'concat',
    component: TestConcatComponent
  },
  {
    path: 'fromevent',
    component: TestFromeventComponent
  },
  {
    path: 'subject',
    component: TestSubjectComponent
  },
  {
    path: 'behaviorsubject',
    component: TestBehaviorSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
