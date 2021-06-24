import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestMapComponent } from './operators-test/test-map/test-map.component';
import { TestMergemapComponent } from './operators-test/test-mergemap/test-mergemap.component';
import { TestTapComponent } from './operators-test/test-tap/test-tap.component';
import { TestForkjoinComponent } from './operators-test/test-forkjoin/test-forkjoin.component';
import { TestOfComponent } from './operators-test/test-of/test-of.component';
import { TestFromComponent } from './operators-test/test-from/test-from.component';
import { TestFromeventComponent } from './operators-test/test-fromevent/test-fromevent.component';
import { TestIifComponent } from './operators-test/test-iif/test-iif.component';
import { TestTakeComponent } from './operators-test/test-take/test-take.component';
import { TestSwitchMapComponent } from './operators-test/test-switch-map/test-switch-map.component';
import { TestSharereplayComponent } from './operators-test/test-sharereplay/test-sharereplay.component';
import { TestFilterComponent } from './operators-test/test-filter/test-filter.component';
import { TestLastComponent } from './operators-test/test-last/test-last.component';
import { TestConcatComponent } from './operators-test/test-concat/test-concat.component';
import { TestSubjectComponent } from './test-subject/test-subject.component';
import { TestBehaviorSubjectComponent } from './test-behavior-subject/test-behavior-subject.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestMapComponent,
    TestMergemapComponent,
    TestTapComponent,
    TestForkjoinComponent,
    TestOfComponent,
    TestFromComponent,
    TestFromeventComponent,
    TestIifComponent,
    TestSubjectComponent,
    TestBehaviorSubjectComponent,
    TestTakeComponent,
    TestSwitchMapComponent,
    TestSharereplayComponent,
    TestFilterComponent,
    TestLastComponent,
    TestConcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
