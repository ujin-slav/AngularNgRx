import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {addOrg } from '../store/action';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  count$: Observable<number[]>;
 
  constructor(private store: Store) {
    this.count$ = store.select('count');
  }
 
  increment() {
    this.store.dispatch(addOrg({orgs:[1,2,3]}));
  }
 
  decrement() {
  }
 
  reset() {
  }
}